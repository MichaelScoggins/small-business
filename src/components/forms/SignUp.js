import React from "react";
import { Redirect } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Questionnaire from "../../containers/forms/Questionnaire";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Higher Intentions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(./../spaceman.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();
  const [redirectHome, setRedirectHome] = React.useState(false);

  const handleTextChange = (e) => {
    const newState = props.profile;
    newState[e.target.id] = e.target.value;
    props.setProfile(newState);
  };

  const setProfile = (e) => {
    e.preventDefault();
    const profile = props.profile;
    console.log({ profile });
    // profile.id = uuidv4();
    props.setProfile(profile);
    console.log(props.profile);
    // clearAll();
  };

  if (redirectHome) {
    return <Redirect to="/" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={setProfile}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.firstName}
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              type="text"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.lastName}
              fullWidth
              name="lastName"
              label="Last Name"
              type="text"
              id="lastName"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.email}
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.password}
              fullWidth
              name="password"
              label="Password"
              type="text"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.city}
              fullWidth
              name="city"
              label="City"
              type="text"
              id="city"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleTextChange}
              value={props.state}
              fullWidth
              name="state"
              label="State"
              type="text"
              id="state"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Questionnaire />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUp;
