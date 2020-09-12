import React, { useState } from "react";
import cx from "classnames";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ListItem, Button, Typography, IconButton } from "@material-ui/core";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons/";
import DeleteIcon from "@material-ui/icons/Delete";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    width: "100%",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",
    textAlign: "left",
    alignItems: "center",
    paddingTop: "8px",
    paddingBottom: "8px",
    justifyContent: "flex-start",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      "& $hide": {
        display: "block",
        color: "red",
      },
    },
  },
  root: {
    display: "flex",
    flexGrow: 1,
    minWidth: "380px",
    marginBottom: theme.spacing(1),
  },
  details: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2),
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    marginTop: theme.spacing(4),
  },
  pointBox: {
    background: grey[50],
    border: "1px solid #ccc",
    borderRadius: 3,
    padding: theme.spacing(2, 5),
    textAlign: "center",
  },

  listItem: {
    margin: theme.spacing(1),
  },
  selected: {
    background: "rgba(0, 0, 0, 0.08)",
  },
  deleteIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  hide: {
    display: "none",
  },
}));

const Link = ({
  link,
  displayConfirmationDialog,
  handleUpVote,
  handleDownVote,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <ListItem
      alignItems="flex-start"
      classes={{
        root: classes.listItemRoot,
      }}
      className={classes.listItem}
      disableGutters
      button
    >
      <div className={classes.root}>
        <span className={classes.pointBox}>
          <Typography component="p" variant="h3" color="textPrimary">
            {link.points}
          </Typography>
          <Typography
            component="span"
            variant="subtitle2"
            color="textSecondary"
          >
            POINTS
          </Typography>
        </span>

        <div>
          <div className={classes.details}>
            <div className={classes.content}>
              <Typography component="span" variant="h5" color="textPrimary">
                {link.name}
              </Typography>

              <Typography variant="subtitle2" color="textSecondary">
                {link.url}
              </Typography>
            </div>
            <div className={classes.controls}>
              <div className={classes.inlineButtons}>
                <Button
                  variant="text"
                  color="default"
                  size="small"
                  className={classes.button}
                  startIcon={<ArrowUpward />}
                  onClick={() => handleUpVote(link)}
                >
                  Up Vote
                </Button>

                <Button
                  variant="text"
                  color="default"
                  size="small"
                  className={classes.button}
                  startIcon={<ArrowDownward />}
                  onClick={() => handleDownVote(link)}
                >
                  Down Vote
                </Button>
              </div>
            </div>
          </div>

          <IconButton
            aria-label="delete"
            color="secondary"
            className={cx(classes.deleteIcon, classes.hide)}
            onClick={() => displayConfirmationDialog(link)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};

export default Link;
