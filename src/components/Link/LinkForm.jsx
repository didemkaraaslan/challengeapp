import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Icon } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

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
}));

const LinkForm = ({ handleCloseForm }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

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

      <form className={classes.form}>
        <Typography variant="h4" gutterBottom>
          Add New Link
        </Typography>

        <TextField
          id="name"
          label="Link Name"
          variant="outlined"
          value={name}
          className={classes.textField}
          handleChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="url"
          label="Link URL"
          variant="outlined"
          value={url}
          className={classes.textField}
          handleChange={(event) => setUrl(event.target.value)}
        />
        <Button variant="contained" color="primary">
          ADD
        </Button>
      </form>
    </React.Fragment>
  );
};

export default LinkForm;
