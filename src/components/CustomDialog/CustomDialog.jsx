import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const CustomDialog = ({ open, title, message, handleConfirm, handleClose }) => {
  useEffect(() => {
    return handleClose();
  }, []);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleConfirm()} color="primary">
          OK
        </Button>
        <Button onClick={() => handleClose()} color="primary" autoFocus>
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
