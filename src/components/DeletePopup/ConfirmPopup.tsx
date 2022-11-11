import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
  isOpen: boolean;
  togglePopup: () => void;
  onConfirmDelete: () => void;
}

const ConfirmPopup = ({ isOpen, togglePopup, onConfirmDelete }: Props) => {
  return (
    <Dialog open={isOpen} onClose={togglePopup}>
      <DialogContent>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
      </DialogContent>
      <DialogActions>
        <Button onClick={togglePopup}>Cancel</Button>
        <Button onClick={onConfirmDelete}>Delete Department</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmPopup;
