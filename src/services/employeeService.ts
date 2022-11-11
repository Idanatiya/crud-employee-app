import { DEPARTMENTS_DB_STORAGE_KEY } from "@/constants";
import { Department, Employee } from "@/types";

import { storageService } from "./storageService";

export const EMPLOYEE_STORAGE_KEY = "employeeDB";

function saveEmployee(employee: Employee) {
  const employeeDB: Employee[] =
    storageService.loadFromStorage(EMPLOYEE_STORAGE_KEY);
  const newEmployeeDB = [...employeeDB, employee];
  storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, newEmployeeDB);
}

function getEmployeesByOrganiztionId(id: string) {
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );

  const organizationEmployees = departmentsDB.filter(
    department => department.organizationId === id
  );
  const employeeDB = organizationEmployees.flatMap(
    department => department.employees
  );

  storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, employeeDB);

  //   if (!employeeDB) {
  //     const organizationEmployees = departmentsDB.filter(
  //       department => department.organizationId === id
  //     );
  //     const employees = organizationEmployees.flatMap(
  //       department => department.employees
  //     );

  //     storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, employees);
  //   } else {
  //     storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, []);
  //   }

  return employeeDB;
}

function deleteEmployee(id: string) {
  const employeeDB: Employee[] =
    storageService.loadFromStorage(EMPLOYEE_STORAGE_KEY);
  const filteredEmployees = employeeDB.filter(employee => employee.id !== id);
  storageService.saveToStorage(EMPLOYEE_STORAGE_KEY, filteredEmployees);
}

export const employeeService = {
  getEmployeesByOrganiztionId,
  deleteEmployee,
  saveEmployee
};
