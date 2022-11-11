import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { Option } from "@/types";
import useToggle from "@/hooks/useToggle";
import { EmployeeFormData } from "@/types";

import BasicSelect from "../BasicSelect/BasicSelect";

interface Props {
  departments: Option[];
  onCreateEmployee: (formData: EmployeeFormData) => void;
}

const EmployeeForm = ({ departments, onCreateEmployee }: Props) => {
  const [open, toggleDialog] = useToggle();
  const [name, setName] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState("");

  console.log({ selectedDepartment });

  const onHandleSubmit = () => {
    onCreateEmployee({ name, selectedDepartment });
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
          <BasicSelect
            value={selectedDepartment}
            options={departments}
            label="Department"
            onHandleSelect={setSelectedDepartment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button onClick={onHandleSubmit}>Add Employee</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeeForm;
