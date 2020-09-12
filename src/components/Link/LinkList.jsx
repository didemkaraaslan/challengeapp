import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, FormControl, NativeSelect } from "@material-ui/core";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 240,
  },
}));

const LinkList = ({
  links,
  displayConfirmationDialog,
  handleUpVote,
  handleDownVote,
}) => {
  const classes = useStyles();

  return (
    <List dense>
      {links &&
        links.map((link, index) => (
          <Link
            key={link.id}
            link={link}
            displayConfirmationDialog={displayConfirmationDialog}
            handleUpVote={handleUpVote}
            handleDownVote={handleDownVote}
          />
        ))}
    </List>
  );
};

export default LinkList;
