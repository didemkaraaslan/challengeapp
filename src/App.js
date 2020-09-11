import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import LinkList from "./components/Link/LinkList";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
        <LinkList links={links} />
      </div>
    </Container>
  );
}

export default App;
