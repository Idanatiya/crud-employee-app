import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import BaseSelect from "@/components/BaseSelect/BaseSelect";
import EmployeeForm from "@/components/EmployeeForm/EmployeeForm";
import EmployeeTable from "@/components/EmployeeTable/EmployeeTable";
import { departmentService } from "@/services/departmentService";
import { employeeService } from "@/services/employeeService";
import { EmployeeFormData, EmployeesByDepartments, Option } from "@/types";

interface Props {
  organizationId: string;
}

function EmployeePage({ organizationId }: Props) {
  const navigate = useNavigate();
  const [employeesByDepartment, setEmployeesByDepartments] = React.useState<
    EmployeesByDepartments[]
  >([]);

  const [filteredDepartments, setFilteredDepartments] = React.useState<
    Option[]
  >([]);

  const [selectedFilterDepartmentId, setSelectedFilterDepartmentId] =
    React.useState("");
  React.useEffect(() => {
    const employees: EmployeesByDepartments[] =
      employeeService.getEmployeesByOrganiztionId(organizationId);

    if (!employees.length) return navigate("/");
    setEmployeesByDepartments(employees);
    const departmentsFilter = employeeService.getDepartmentsFilter();

    setFilteredDepartments(departmentsFilter);
  }, [navigate, organizationId]);

  const filteredEmployees = React.useMemo(() => {
    if (selectedFilterDepartmentId === "allId" || !selectedFilterDepartmentId)
      return employeesByDepartment;
    return employeesByDepartment.filter(
      employeeDepartment =>
        employeeDepartment.departmentId === selectedFilterDepartmentId
    );
  }, [employeesByDepartment, selectedFilterDepartmentId]);

  const departmentsOptions = departmentService
    .getDepartmentsById(organizationId)
    .map(department => ({ key: department.id, value: department.name }));

  const onDeleteEmployee = (id: string) => {
    const updatedEmployeesByDepartments = employeeService.deleteEmployee(id);
    setEmployeesByDepartments(updatedEmployeesByDepartments);
    toast(`Employee with id: ${id} has been deleted!`);
  };

  const onCreateEmployee = (formData: EmployeeFormData) => {
    const updatedEmployeesByDepartment =
      departmentService.addEmployeeToDepartment(formData);
    setEmployeesByDepartments(updatedEmployeesByDepartment);
    toast(`Employee with the name ${formData.name} has been created!`);
  };

  return (
    <div>
      <BaseSelect
        label="Filter Employee By Department"
        options={filteredDepartments}
        value={selectedFilterDepartmentId}
        onHandleSelect={setSelectedFilterDepartmentId}
      />
      <EmployeeForm
        departmentsOptions={departmentsOptions}
        onCreateEmployee={onCreateEmployee}
      />
      {employeesByDepartment.length > 0 ? (
        <EmployeeTable
          emplyoeesOfDep={filteredEmployees}
          onDeleteEmployee={onDeleteEmployee}
        />
      ) : (
        <div>No Employees</div>
      )}
    </div>
  );
}

export default EmployeePage;
