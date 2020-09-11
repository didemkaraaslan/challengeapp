import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button, Icon } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { grey } from "@material-ui/core/colors";
import Header from "./components/Header/Header";
import LinkList from "./components/Link/LinkList";
import LinkForm from "./components/Link/LinkForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  containerBox: {
    display: "flex",
    flexDirection: "row",
    background: grey[50],
    border: "1px solid #ccc",
    borderRadius: 3,
    padding: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
    padding: theme.spacing(2, 3),
  },
  text: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  divider: {
    border: `1px solid ${grey[300]}`,
    height: 0,
    width: "420px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
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

  const [display, setDisplay] = useState(true);

  if (display)
    return (
      <Container component="main" maxWidth="xl">
        <Header />
        <div className={classes.paper}>
          <LinkForm handleCloseForm={() => setDisplay(false)} />
        </div>
      </Container>
    );

  return (
    <Container component="main" maxWidth="xl">
      <Header />
      <div className={classes.paper}>
        <div className={classes.containerBox}>
          <div className={classes.box}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.margin}
              onClick={() => setDisplay(true)}
            >
              <AddIcon style={{ fontSize: 40 }} />
            </Button>
          </div>

          <Typography
            component="p"
            variant="h4"
            color="textPrimary"
            className={classes.text}
          >
            Submit a link
          </Typography>
        </div>

        {/* Divider */}
        <p className={classes.divider} />
        <LinkList links={links} />
      </div>
    </Container>
  );
}

export default App;
