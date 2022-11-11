import * as React from "react";

import EmployeeForm from "@/components/EmployeeForm/EmployeeForm";
import EmployeeTable from "@/components/EmployeeTable/EmployeeTable";
import { departmentService } from "@/services/departmentService";
import { employeeService } from "@/services/employeeService";
import { Employee, EmployeeFormData } from "@/types";
import { toast } from "react-toastify";

interface Props {
  organizationId: string;
}

function EmployeePage({ organizationId }: Props) {
  const [employees, setEmployees] = React.useState<Employee[]>([]);

  React.useEffect(() => {
    const employees: Employee[] =
      employeeService.getEmployeesByOrganiztionId(organizationId);
    setEmployees(employees);
  }, [organizationId]);

  const departmentsOptions = departmentService
    .getDepartmentsById(organizationId)
    .map(department => ({ key: department.id, value: department.name }));

  const onDeleteEmployee = (id: string) => {
    const filteredEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(filteredEmployees);
    employeeService.deleteEmployee(id);
    toast(`Employee with id: ${id} has been deleted!`);
  };

  const onCreateEmployee = (formData: EmployeeFormData) => {
    const { selectedDepartment: _selectedDepartment, ...rest } = formData;
    setEmployees(prevEmployees => [...prevEmployees, rest]);
    departmentService.addEmployeeToDepartment(formData);
    toast(`Employee with the name ${formData.name} has been created!`);
  };

  return (
    <div>
      <EmployeeForm
        departmentsOptions={departmentsOptions}
        onCreateEmployee={onCreateEmployee}
      />
      {employees.length > 0 ? (
        <EmployeeTable
          employees={employees}
          onDeleteEmployee={onDeleteEmployee}
        />
      ) : (
        <div>No Employees</div>
      )}
    </div>
  );
}

export default EmployeePage;
