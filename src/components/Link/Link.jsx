import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Button,
  Typography,
  Avatar,
  Divider,
} from "@material-ui/core";
import { ArrowUpward, ArrowDownward, Menu } from "@material-ui/icons/";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  pointBox: {
    background: grey[50],
    border: "1px solid #ccc",
    borderRadius: 3,
    marginRight: theme.spacing(3),
    padding: theme.spacing(2, 3, 3),
    textAlign: "center",
  },
  inlineButtons: {
    position: "absolute",
    bottom: "10px",
    right: "65px",
  },
  listItem: {
    margin: theme.spacing(2),
  },
}));

const Link = ({ link }) => {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start" className={classes.listItem}>
      <span className={classes.pointBox}>
        <Typography component="p" variant="h4" color="textPrimary">
          {link.points}
        </Typography>
        <Typography component="span" variant="subtitle2" color="textSecondary">
          POINTS
        </Typography>
      </span>
      <ListItemText
        primary={
          <Typography component="span" variant="h5" color="textPrimary">
            {link.name}
          </Typography>
        }
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="subtitle2"
              color="textSecondary"
            >
              {link.url}
            </Typography>
          </React.Fragment>
        }
      />
      <p className={classes.inlineButtons}>
        <ListItemIcon>
          <Button
            variant="text"
            color="default"
            size="small"
            className={classes.button}
            startIcon={<ArrowUpward />}
          >
            Up Vote
          </Button>
        </ListItemIcon>
        <ListItemIcon>
          <Button
            variant="text"
            color="default"
            size="small"
            className={classes.button}
            startIcon={<ArrowDownward />}
          >
            Down Vote
          </Button>
        </ListItemIcon>
      </p>
    </ListItem>
  );
};

export default Link;
