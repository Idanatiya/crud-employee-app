import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import TextField from "@mui/material/TextField";
import * as React from "react";

interface Props {
  isPopupOpen: boolean;
  togglePopup: () => void;
  onConfirmDelete: (isConfirmed: boolean) => void;
}

const DeletePopup = ({ isPopupOpen, togglePopup, onConfirmDelete }: Props) => {
  const onHandleDelete = () => {
    onConfirmDelete(true);
  };
  return (
    <Dialog open={isPopupOpen} onClose={togglePopup}>
      <DialogContent>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
      </DialogContent>
      <DialogActions>
        <Button onClick={togglePopup}>Cancel</Button>
        <Button onClick={onHandleDelete}>Delete Department</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePopup;
