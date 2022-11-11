import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

import BaseSelect from "@/components/BaseSelect/BaseSelect";
import { Department, Option } from "@/types";

interface Props {
  departments: Department[];
  isOpen: boolean;
  toggleTransferPopup: () => void;
  onDeleteEmployees: () => void;
  onTransferEmployees: (departmentId: string) => void;
}

const TrasnferPopup = ({
  departments,
  isOpen,
  toggleTransferPopup,
  onDeleteEmployees,
  onTransferEmployees
}: Props) => {
  const [selectedDepartmentId, setSelectedDepartmentId] = React.useState("");
  const options: Option[] = departments.map(({ id, name }) => ({
    key: id,
    value: name
  }));

  return (
    <Dialog open={isOpen} onClose={toggleTransferPopup}>
      <DialogContent>
        <DialogContent>Do you want to delete all employees?</DialogContent>
        <DialogActions>
          <Button onClick={onDeleteEmployees}>Delete All Employees</Button>
        </DialogActions>
        <DialogTitle>Choose department to transfer employees</DialogTitle>
        <BaseSelect
          options={options}
          label="Department"
          value={selectedDepartmentId}
          onHandleSelect={setSelectedDepartmentId}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleTransferPopup}>Cancel</Button>
        <Button
          disabled={!selectedDepartmentId}
          onClick={() => onTransferEmployees(selectedDepartmentId)}
        >
          Transfer Employees
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TrasnferPopup;
