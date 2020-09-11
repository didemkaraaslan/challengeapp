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
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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
    right: "35px",
  },
}));

const links = [
  {
    name: "Hacker News",
    url: "(https://news.ycombinator.com/)",
    points: 6,
  },
  {
    name: "Product Hunt",
    url: "(https://producthunt.com/)",
    points: 4,
  },
  {
    name: "Quora",
    url: "(https://www.quora.com/)",
    points: 3,
  },
];

function App() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xl">
      <Header />
      <div className={classes.paper}>
        <List>
          {links &&
            links.map((link) => (
              <ListItem alignItems="flex-start">
                <span className={classes.pointBox}>
                  <Typography component="p" variant="h4" color="textPrimary">
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
                <ListItemText
                  primary={
                    <Typography
                      component="span"
                      variant="h5"
                      color="textPrimary"
                    >
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
            ))}
        </List>
      </div>
    </Container>
  );
}

export default App;
