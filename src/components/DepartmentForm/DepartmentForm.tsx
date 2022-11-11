import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import * as React from "react";

import useToggle from "@/hooks/useToggle";
interface Props {
  onAddDepartment: (name: string) => void;
}

export default function DepartmentForm({ onAddDepartment }: Props) {
  const [open, toggleDialog] = useToggle();
  const [name, setName] = React.useState("");

  const addDepartment = () => {
    onAddDepartment(name);
    setName("");
    toggleDialog();
  };
  return (
    <div>
      <Button variant="outlined" onClick={toggleDialog}>
        Add Department
      </Button>
      <Dialog open={open} onClose={toggleDialog}>
        <DialogTitle> Add New Department</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Department"
            type="text"
            fullWidth
            value={name}
            variant="standard"
            onChange={ev => setName(ev.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button onClick={addDepartment}>Add Dapertment</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
