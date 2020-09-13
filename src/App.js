import React, { useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
  FormControl,
  NativeSelect,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AddIcon from "@material-ui/icons/Add";
import { grey } from "@material-ui/core/colors";
import Header from "./components/Header/Header";
import LinkList from "./components/Link/LinkList";
import LinkForm from "./components/Link/LinkForm";
import CustomSnackbar from "./components/CustomSnackbar/CustomSnackbar";
import CustomDialog from "./components/CustomDialog/CustomDialog";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  sortByMostVoted,
  sortByLessVoted,
  sortByLastUpdatedTime,
} from "./functions";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    padding: theme.spacing(4),
    border: "1px solid #ccc",
    borderRadius: 3,
  },
  containerBox: {
    display: "flex",
    flexDirection: "row",
    background: grey[50],
    border: "1px solid #ccc",
    borderRadius: 3,
    padding: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
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
  formControl: {
    minWidth: 240,
  },
}));

const options = ["Most Voted (Z->A)", "Less Voted (A->Z)"];

function App() {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);
  const [linkToDelete, setLinkToDelete] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [display, setDisplay] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [linksPerPage, setLinksPerPage] = useState(5);
  const [links, setLinks] = useState(() => {
    return getFromLocalStorage("links") || [];
  });
  const [orderBy, setOrderBy] = useState("");

  const addNewLink = (name, url) => {
    const updatedLinks = [
      {
        id: uuidv4(),
        name,
        url,
        points: 0,
        lastUpdated: moment().valueOf(),
      },
      ...links,
    ];

    saveToLocalStorage("links", updatedLinks);

    setLinks(updatedLinks);
  };

  const handleDeleteLink = () => {
    const { id, name } = linkToDelete;

    const updatedLinks = links.filter((link) => link.id !== id);
    saveToLocalStorage("links", updatedLinks);

    setLinks(updatedLinks);
    setOpenDialog(false);
    displayMessage(name);
  };

  const handleUpVote = (link) => {
    const updatedLinks = [...links].filter((item) => {
      if (item.id === link.id) {
        item.points = item.points + 1;
        item.lastUpdated = moment().valueOf();
        return item;
      }
      return item;
    });

    saveToLocalStorage("links", updatedLinks);
    setLinks(updatedLinks);
  };

  const handleDownVote = (link) => {
    const updatedLinks = [...links].filter((item) => {
      if (item.id === link.id) {
        item.points = item.points - 1;
        item.lastUpdated = moment().valueOf();
        return item;
      }
      return item;
    });

    saveToLocalStorage("links", updatedLinks);
    setLinks(updatedLinks);
  };

  const displayConfirmationDialog = (link) => {
    setLinkToDelete(link);
    setDialogMessage(`Do you want to remove ${link.name} ? `);
    setOpenDialog(true);
  };

  const displayMessage = (name) => {
    setSnackMessage(`${name.toUpperCase()} removed.`);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    setOpenSnackbar(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const orderLinks = (links) => {
    switch (orderBy) {
      case "Most Voted (Z->A)":
        return sortByMostVoted(links);
      case "Less Voted (A->Z)":
        return sortByLessVoted(links);
      default:
        return sortByLastUpdatedTime(links);
    }
  };

  const orderedLinks = orderLinks(links);

  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = orderedLinks.slice(indexOfFirstLink, indexOfLastLink);

  if (display)
    return (
      <React.Fragment>
        <Header />
        <Container component="main" maxWidth="md">
          <div className={classes.paper}>
            <LinkForm
              links={links}
              handleAddNewLink={addNewLink}
              handleCloseForm={() => setDisplay(false)}
            />
          </div>
        </Container>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Header />
      <Container component="main" maxWidth="md">
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

          {/* Order By */}
          <FormControl className={classes.formControl}>
            <NativeSelect
              name="orderBy"
              value={orderBy}
              inputProps={{ "aria-label": "orderBy" }}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="">Order By</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </NativeSelect>
          </FormControl>

          <LinkList
            links={currentLinks}
            displayConfirmationDialog={displayConfirmationDialog}
            handleUpVote={handleUpVote}
            handleDownVote={handleDownVote}
          />
          {links.length > 5 && (
            <Pagination
              count={Math.ceil(links.length / linksPerPage)}
              page={currentPage}
              onChange={(event, val) => setCurrentPage(val)}
            />
          )}
        </div>
      </Container>

      <CustomDialog
        open={openDialog}
        title={"Remove Link"}
        message={dialogMessage}
        handleConfirm={handleDeleteLink}
        handleClose={handleCloseDialog}
      />

      <CustomSnackbar
        open={openSnackbar}
        message={snackMessage}
        handleClose={handleCloseSnackbar}
      />
    </React.Fragment>
  );
}

export default App;
