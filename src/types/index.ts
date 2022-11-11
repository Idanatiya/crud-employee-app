export interface Organization {
  name: string;
  id: string;
}

export interface Department {
  organizationId: string;
  id: string;
  name: string;
  employees: Employee[];
}

export interface Employee {
  id: string;
  name: string;
}

export interface OrganizationData {
  name: string;
  id: string;
  departments: Department[];
}

export interface Option {
  key: string;
  value: string;
}

export interface EmployeeFormData {
  name: string;
  selectedDepartmentId: string;
  id: string;
}

export interface EmployeesByDepartments {
  name: string;
  departmentId: string;
  employees: Employee[];
}
