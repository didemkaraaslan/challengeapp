import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Snackbar } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    fontSize: 33,
  },
  iconText: {
    margin: theme.spacing(1),
  },
  form: {
    marginTop: theme.spacing(6),
    width: 370,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const LinkForm = ({ links, handleCloseForm, handleAddNewLink }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const isValidForm = () => name !== "" && url !== "";

  const clearFormFields = () => {
    setName("");
    setUrl("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isValidForm()) {
      // Create new link
      const newLink = {
        id: uuidv4(),
        name,
        url,
        points: 0,
      };

      const updatedLinks = [newLink, ...links];

      handleAddNewLink(updatedLinks);

      displaySuccessMessage(name);
      clearFormFields();
    }
  };

  const displaySuccessMessage = (name) => {
    setMessage(`${name.toUpperCase()}  added.`);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="text"
        className={classes.link}
        onClick={() => handleCloseForm()}
      >
        <KeyboardBackspaceIcon className={classes.icon} />{" "}
        <span className={classes.iconText}>Return to List</span>
      </Button>

      <form className={classes.form} onSubmit={handleFormSubmit}>
        <Typography variant="h4" gutterBottom>
          Add New Link
        </Typography>

        <TextField
          id="name"
          label="Link Name"
          variant="outlined"
          value={name}
          className={classes.textField}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="url"
          label="Link URL"
          variant="outlined"
          value={url}
          className={classes.textField}
          onChange={(event) => setUrl(event.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          ADD
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default LinkForm;
