import EmployeeTable from "@/components/EmployeeTable/EmployeeTable";
import { employeeService } from "@/services/employeeService";
import { Employee, EmployeeFormData } from "@/types";
import * as React from "react";
import EmployeeForm from "@/components/EmployeeForm/EmployeeForm";
import { departmentService } from "@/services/departmentService";

interface Props {
  organizationId: string;
}

function EmployeePage({ organizationId }: Props) {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  React.useEffect(() => {
    const data: Employee[] =
      employeeService.getEmployeesByOrganizationId(organizationId);
    console.log({ data });

    setEmployees(data);
  }, [organizationId]);

  const departments = departmentService
    .getDepartmentsById(organizationId)
    .map(department => ({ key: department.id, value: department.name }));
  console.log({ departments });

  const onDeleteEmployee = (id: string) => {
    const filteredEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(filteredEmployees);
  };

  const onCreateEmployee = (formData: EmployeeFormData) => {
    const newEmployee: Employee = {
      id: Math.random().toString(),
      name: formData.name
    };
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
    // departmentService.addEmployeeToDepartment(
    //   newEmployee,
    //   formData.selectedDepartment
    //   organizationId
    // );
  };

  return (
    <div>
      <EmployeeForm
        departments={departments}
        onCreateEmployee={onCreateEmployee}
      />
      <EmployeeTable
        employees={employees}
        onDeleteEmployee={onDeleteEmployee}
      />
    </div>
  );
}

export default EmployeePage;
