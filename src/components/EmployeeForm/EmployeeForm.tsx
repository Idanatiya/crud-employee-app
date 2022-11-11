import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

import BaseSelect from "@/components/BaseSelect/BaseSelect";
import useToggle from "@/hooks/useToggle";
import { EmployeeFormData, Option } from "@/types";

interface Props {
  onCreateEmployee: (formData: EmployeeFormData) => void;
  departmentsOptions: Option[];
}

const EmployeeForm = ({ onCreateEmployee, departmentsOptions }: Props) => {
  const [open, toggleDialog] = useToggle();
  const [name, setName] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState("");
  const isBtnDisabled = !name || !selectedDepartment;

  const resetForm = () => {
    setName("");
    setSelectedDepartment("");
  };

  const onHandleSubmit = () => {
    onCreateEmployee({
      name,
      selectedDepartmentId: selectedDepartment,
      id: uuidv4()
    });
    resetForm();
    toggleDialog();
  };

  return (
    <div>
      <Button variant="outlined" onClick={toggleDialog}>
        Add Employee
      </Button>
      <Dialog open={open} onClose={toggleDialog}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter employee name"
            type="text"
            fullWidth
            value={name}
            variant="standard"
            onChange={ev => setName(ev.target.value)}
          />
          <BaseSelect
            value={selectedDepartment}
            options={departmentsOptions}
            label="Department"
            onHandleSelect={setSelectedDepartment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button disabled={isBtnDisabled} onClick={onHandleSubmit}>
            Add Employee
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeForm;
