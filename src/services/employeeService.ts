import { DEPARTMENTS_DB_STORAGE_KEY } from "@/constants";
import { Department, Employee, EmployeesByDepartments, Option } from "@/types";

import { storageService } from "./storageService";

export const EMPLOYEE_STORAGE_KEY = "employeeDB";

function saveEmployee(departmentId: string, employees: Employee[]) {
  const employeeDB: EmployeesByDepartments[] =
    storageService.loadFromStorage(EMPLOYEE_STORAGE_KEY);

  const departmentIdx = employeeDB.findIndex(
    department => department.departmentId === departmentId
  );

  employeeDB[departmentIdx].employees = employees;
  storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, employeeDB);
  return employeeDB;
}

function getEmployeesByOrganiztionId(id: string) {
  const isCurrDB = storageService.loadFromStorage(EMPLOYEE_STORAGE_KEY);
  if (isCurrDB) return isCurrDB;
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );

  if (!departmentsDB) return [];
  const organizationEmployees = departmentsDB.filter(
    department => department.organizationId === id
  );

  const employeesOfDep: EmployeesByDepartments[] = organizationEmployees.map(
    department => ({
      departmentId: department.id,
      name: department.name,
      employees: department.employees
    })
  );

  storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, employeesOfDep);

  return employeesOfDep;
}

function deleteEmployee(id: string) {
  const emloyeesByDepartments: EmployeesByDepartments[] =
    storageService.loadFromStorage(EMPLOYEE_STORAGE_KEY);

  emloyeesByDepartments.some(department => {
    const removedIdx = department.employees.findIndex(e => e.id === id);
    if (removedIdx !== -1) {
      department.employees.splice(removedIdx, 1);
      return true;
    }
  });

  storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, emloyeesByDepartments);
  return emloyeesByDepartments;
}
function getDepartmentsFilter() {
  const emloyeesByDepartments: EmployeesByDepartments[] =
    storageService.loadFromStorage(EMPLOYEE_STORAGE_KEY);
  const filterObj = emloyeesByDepartments.reduce(
    (acc, employeesByDepartment) => {
      if (!acc[employeesByDepartment.name]) {
        acc[employeesByDepartment.name] = {
          value: employeesByDepartment.name,
          key: employeesByDepartment.departmentId
        };
      }

      return acc;
    },
    {} as Record<string, Option>
  );

  const newObj = [...Object.values(filterObj), { key: "allId", value: "All" }];
  return newObj;
}

export const employeeService = {
  getEmployeesByOrganiztionId,
  deleteEmployee,
  saveEmployee,
  getDepartmentsFilter
};
