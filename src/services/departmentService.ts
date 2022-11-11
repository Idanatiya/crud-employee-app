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
  employeeService.saveEmployee(departmentId, departmentsDB[idx].employees);
  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, departmentsDB);
}

function transferEmployees(
  selectedDepartmentId: string,
  departmentToTransferId: string
) {
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );

  const selectedDepartmentIdx = departmentsDB.findIndex(
    department => department.id === selectedDepartmentId
  );
  const toTransferDepartmentIdx = departmentsDB.findIndex(
    department => department.id === departmentToTransferId
  );

  const employeesToTransfer = departmentsDB[selectedDepartmentIdx].employees;

  departmentsDB[toTransferDepartmentIdx].employees = [
    ...departmentsDB[toTransferDepartmentIdx].employees,
    ...employeesToTransfer
  ];

  departmentsDB[selectedDepartmentIdx].employees.length = 0;
  const organizationId = storageService.loadFromStorage("organizationId");
  getDepartmentsById(organizationId);

  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, departmentsDB);
}

function addEmployeeToDepartment(formData: EmployeeFormData) {
  const { selectedDepartmentId, ...employee } = formData;
  const departmentsDB: Department[] = storageService.loadFromStorage(
    DEPARTMENTS_DB_STORAGE_KEY
  );

  const selectedDepartmentIdx = departmentsDB.findIndex(
    department => department.id === selectedDepartmentId
  );
  departmentsDB[selectedDepartmentIdx] = {
    ...departmentsDB[selectedDepartmentIdx],
    employees: [...departmentsDB[selectedDepartmentIdx].employees, employee]
  };

  const { id: departmentId, employees } = departmentsDB[selectedDepartmentIdx];
  storageService.saveToStorage(DEPARTMENTS_DB_STORAGE_KEY, departmentsDB);
  return employeeService.saveEmployee(departmentId, employees);
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
