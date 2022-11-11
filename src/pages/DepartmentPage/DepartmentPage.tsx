import * as React from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import ConfirmPopup from "@/components/DeletePopup/ConfirmPopup";
import DepartmentForm from "@/components/DepartmentForm/DepartmentForm";
import DepartmentTable from "@/components/DepartmentTable/DepartmentTable";
import TrasnferPopup from "@/components/TrasnferPopup/TrasnferPopup";
import useToggle from "@/hooks/useToggle";
import { departmentService } from "@/services/departmentService";
import { Department } from "@/types";

interface Props {
  organizationId: string;
}

function DepartmentPage({ organizationId }: Props) {
  const [departments, setDepartments] = React.useState<Department[]>([]);
  const [isConfirmPopupOpen, togglePopup] = useToggle();
  const [isTransferPopupOpen, toggleTransferPopup] = useToggle();
  const [departmentId, setDepartmentId] = React.useState("");

  React.useEffect(() => {
    const departments = departmentService.getDepartmentsById(organizationId);
    setDepartments(departments);
  }, [organizationId]);

  const onHandleDelete = (id: string) => {
    const selectedDepartment = departments.find(
      department => department.id === id
    );

    if (!selectedDepartment?.employees.length) {
      togglePopup();
    } else {
      toggleTransferPopup();
    }
  };

  const onHandleConfirm = () => {
    setDepartments(prev =>
      prev.filter(department => department.id !== departmentId)
    );
    departmentService.removeDepartmentById(departmentId);
    togglePopup();
    toast("Department has been deleted!");
  };

  const onOpenPopup = (id: string) => {
    setDepartmentId(id);
    onHandleDelete(id);
  };

  const onAddDepartment = (departmentName: string) => {
    const newDepartment: Department = {
      organizationId,
      name: departmentName,
      id: uuidv4(),
      employees: []
    };
    setDepartments(prev => [...prev, newDepartment]);
    departmentService.createDepartment(newDepartment);
    toast(`Department with the name ${departmentName} has been added!`);
  };
  const onHandleDeleteEmployees = () => {
    departmentService.deleteDepartmentEmployees(departmentId);
    toggleTransferPopup();
    toast(`All Employees have been deleted!`);
  };

  const onHandleTransferEmployees = (departmentToTransferId: string) => {
    departmentService.transferEmployees(departmentToTransferId, departmentId);
    toggleTransferPopup();
    toast(`Employees Transfered Sucessfully`);
  };

  return (
    <section>
      <ConfirmPopup
        togglePopup={togglePopup}
        isOpen={isConfirmPopupOpen}
        onConfirmDelete={onHandleConfirm}
      />
      <TrasnferPopup
        departments={departments}
        isOpen={isTransferPopupOpen}
        toggleTransferPopup={toggleTransferPopup}
        onTransferEmployees={onHandleTransferEmployees}
        onDeleteEmployees={onHandleDeleteEmployees}
      />
      <DepartmentForm onAddDepartment={onAddDepartment} />
      <DepartmentTable departments={departments} onHandleDelete={onOpenPopup} />
    </section>
  );
}

export default DepartmentPage;
