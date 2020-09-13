import React from "react";
import { List } from "@material-ui/core";
import Link from "./Link";

const LinkList = ({
  links,
  displayConfirmationDialog,
  handleUpVote,
  handleDownVote,
}) => {
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
