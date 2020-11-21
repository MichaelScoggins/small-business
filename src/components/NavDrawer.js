import React from "react";
import { Redirect } from "react-router-dom";
// import clsx from "clsx";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import FindPerfectStrain from "../components/FindPerfectStrain";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FolderOpenIcon from "@material-ui/icons/FolderOpen";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function NavDrawer(props) {
  const classes = useStyles();
  const [redirect, setRedirect] = React.useState(null);

  React.useEffect(() => {
    setRedirect(null);
  });

  const toggleDrawer = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.toggleDrawer(toggle);
  };

  const handleRedirect = (link) => {
    setRedirect(link);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(!props.drawerOpen)}
      onKeyDown={toggleDrawer(!props.drawerOpen)}
    >
      <List>
        <ListItem onClick={() => handleRedirect("/")} button key="home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          onClick={() => props.toggleFindPerfectStrain(true)}
          button
          key="perfectStrain"
        >
          <ListItemIcon>
            <GpsFixedIcon />
          </ListItemIcon>
          <ListItemText primary="Find Perfect Strain" />
        </ListItem>
        <ListItem
          onClick={() => handleRedirect("/favorites")}
          button
          key="favorites"
        >
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem
          onClick={() => handleRedirect("/experience")}
          button
          key="experience"
        >
          <ListItemIcon>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Experience" />
        </ListItem>
        <Divider />
        <List>
          <ListItem onClick={handleRedirect} button key="account">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
        </List>
      </List>
    </div>
  );

  return (
    <React.Fragment key="left">
      {redirect && <Redirect to={redirect} />}
      <Drawer
        anchor="left"
        open={props.drawerOpen}
        onClose={toggleDrawer(!props.drawerOpen)}
      >
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
