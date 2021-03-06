import React from "react";
// import axios from "axios";
// import cookie from "cookie";
// import { useLocation } from "react-router-dom";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
// import ListStrains from "./ListStrains";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function SearchBar(props) {
  const [redirect, setRedirect] = React.useState(null);

  React.useEffect(() => {
    setRedirect(null);
  });

  const classes = useStyles();
  // const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    props.setUserSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchUserSearchResults(props.userSearchInput);
    props.setUserSearchInput("");
    setRedirect(true);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputBase
          placeholder="Search All Strains…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => handleChange(e)}
          value={props.userSearchInput}
        />
      </form>
      {redirect && <Redirect to="/search" />}
    </div>
  );
}
