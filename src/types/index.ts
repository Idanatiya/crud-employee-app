export interface Organization {
  name: string;
  id: string;
}

export interface Department {
  id: string;
  name: string;
  employees: Employee[];
}

// export interface Departments {
//   orginizationId: string;
//   departments: Department[];
// }

// export type OrganizationDepartments = Record<string, Departments>;
// export type Departmentes = Record<string, Department>;

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
  selectedDepartment: string;
}
