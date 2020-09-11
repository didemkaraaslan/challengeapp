import React from "react";
import { List } from "@material-ui/core";
import Link from "./Link";

const LinkList = ({ links }) => {
  return (
    <List>
      {links && links.map((link, index) => <Link key={index} link={link} />)}
    </List>
  );
};

export default LinkList;
