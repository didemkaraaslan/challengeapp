import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, FormControl, NativeSelect } from "@material-ui/core";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 240,
  },
}));

const options = ["Most Voted (Z->A)", "Less Voted (A->Z)"];

const LinkList = ({
  links,
  displayConfirmationDialog,
  handleUpVote,
  handleDownVote,
}) => {
  const classes = useStyles();

  const [orderBy, setOrderBy] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <React.Fragment>
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

      <List dense>
        {links &&
          links.map((link, index) => (
            <Link
              key={link.id}
              link={link}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
              displayConfirmationDialog={displayConfirmationDialog}
              handleUpVote={handleUpVote}
              handleDownVote={handleDownVote}
            />
          ))}
      </List>
    </React.Fragment>
  );
};

export default LinkList;
