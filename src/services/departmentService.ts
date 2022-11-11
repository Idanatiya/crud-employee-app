import {
  defaultOrganizationId,
  DEPARTMENTS_DB_STORAGE_KEY,
  mockData
} from "@/constants";
import { Department, EmployeeFormData } from "@/types";

import { employeeService } from "./employeeService";
import { storageService } from "./storageService";

function initializeState() {
  const departmentsDB = storageService.loadFromStorage("departmentsDB");

  if (!departmentsDB) {
    storageService.saveToStorage("departmentsDB", mockData);
  }
}

function getDepartmentsById(id: string = defaultOrganizationId) {
  const departmentsDB: Department[] =
    storageService.loadFromStorage(DEPARTMENTS_DB_STORAGE_KEY) ?? [];
  return departmentsDB.filter(department => department.organizationId === id);
}

function createDepartment(newDepartment: Department) {
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );
  const updatedDepartments = [...departmentsDB, newDepartment];
  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, updatedDepartments);
}

function removeDepartmentById(departmentId: string) {
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );
  const filteredDepartments = departmentsDB.filter(
    department => department.id !== departmentId
  );
  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, filteredDepartments);
}

function deleteDepartmentEmployees(departmentId: string) {
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );
  const idx = departmentsDB.findIndex(
    department => department.id === departmentId
  );
  departmentsDB[idx].employees.length = 0;
  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, departmentsDB);
}

function transferEmployees(
  departmentToTransferId: string,
  currDepartmentId: string
) {
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );

  const currSelectedDepartmentIdx = departmentsDB.findIndex(
    department => department.id === currDepartmentId
  );
  const employeesToTransfer =
    departmentsDB[currSelectedDepartmentIdx].employees;

  if (currSelectedDepartmentIdx !== -1) {
    departmentsDB[currSelectedDepartmentIdx].employees = [];
  }

  const departmentTransferIdx = departmentsDB.findIndex(
    department => department.id === departmentToTransferId
  );
  departmentsDB[departmentTransferIdx] = {
    ...departmentsDB[departmentTransferIdx],
    employees: [
      ...departmentsDB[departmentTransferIdx].employees,
      ...employeesToTransfer
    ]
  };

  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, departmentsDB);
}

function addEmployeeToDepartment(formData: EmployeeFormData) {
  const { selectedDepartment, ...employee } = formData;
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );
  const idx = departmentsDB.findIndex(
    department => department.id === selectedDepartment
  );
  departmentsDB[idx] = {
    ...departmentsDB[idx],
    employees: [...departmentsDB[idx].employees, employee]
  };
  employeeService.saveEmployee(employee);
  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, departmentsDB);
}

export const departmentService = {
  getDepartmentsById,
  createDepartment,
  removeDepartmentById,
  deleteDepartmentEmployees,
  transferEmployees,
  addEmployeeToDepartment,
  initializeState
};
