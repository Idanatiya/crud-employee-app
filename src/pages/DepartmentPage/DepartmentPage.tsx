import * as React from "react";

import DepartmentForm from "@/components/DepartmentForm/DepartmentForm";
import DepartmentTable from "@/components/DepartmentTable/DepartmentTable";
import { departmentService } from "@/services/departmentService";
import { storageService } from "@/services/storageService";
import { Department } from "@/types";
import DeletePopup from "@/components/DeletePopup/DeletePopup";
import useToggle from "@/hooks/useToggle";

interface Props {
  organizationId: string;
}

function DepartmentPage({ organizationId }: Props) {
  const [departments, setDepartments] = React.useState<Department[]>([]);
  const [isPopupOpen, togglePopup] = useToggle();
  const [departmentId, setDepartmentId] = React.useState("");
  console.log({ departments });

  React.useEffect(() => {
    const data = departmentService.getDepartmentsById(organizationId);
    setDepartments(data);
  }, [organizationId]);

  //   const isDepartmentHasEmployees = departments.

  const onConfirmDelete = () => {
    const filteredDepartments = departments.filter(
      department => department.id !== departmentId
    );
    setDepartments(filteredDepartments);
    togglePopup();
    //TODO: Save to storage
    // departmentService.setDepartments(filteredDepartments);
  };

  const onOpenPopup = (id: string) => {
    togglePopup();
    setDepartmentId(id);
  };

  const onAddDepartment = (departmentName: string) => {
    const newDepartment: Department = {
      name: departmentName,
      id: Math.random().toString(),
      employees: []
    };
    setDepartments(prev => [...prev, newDepartment]);
    //TODO: Save to storage
  };

  return (
    <section>
      <DeletePopup
        togglePopup={togglePopup}
        isPopupOpen={isPopupOpen}
        onConfirmDelete={onConfirmDelete}
      />
      <DepartmentForm onAddDepartment={onAddDepartment} />
      <DepartmentTable departments={departments} onOpenPopup={onOpenPopup} />
    </section>
  );
}

export default DepartmentPage;
