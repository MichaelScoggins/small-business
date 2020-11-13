import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Link } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
// import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import PosEffectsChips from "../containers/PosEffectsChips";
import NegEffectsChips from "../containers/NegEffectsChips";
import MedicinalChips from "../containers/MedicinalChips";
import FlavorChips from "../containers/FlavorChips";
import SpeciesPrefsChips from "../containers/SpeciesPrefsChips";
import { Redirect } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

export default function FindPerfectStrain(props) {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(Number(event.target.value) || "");
  // };

  const handleClickOpen = () => {
    props.fetchAllStrains();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setRedirect(true);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="primary">
        Find The Perfect Strain
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Select Your Preferences</DialogTitle>
        <DialogContent>
          <PosEffectsChips />
          <NegEffectsChips />
          <MedicinalChips />
          <FlavorChips />
          <SpeciesPrefsChips />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      {redirect && <Redirect to="/perfectstrain" />}
    </div>
  );
}
