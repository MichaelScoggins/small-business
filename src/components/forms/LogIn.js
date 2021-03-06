import React from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { faBong, faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" color="inherit">
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
    backgroundImage: "url(./../smoking_the_butterflies.jpg)",
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
    color: "white",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  options: {
    color: "azure",
    backgroundColor: theme.palette.info.main,
  },
}));

const LogIn = (props) => {
  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirectHome, setRedirectHome] = React.useState(false);
  const [showDenyPopup, setDenyPopup] = React.useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const userObject = {
    username: username,
    password: password,
  };

  const populatePreLogs = (token) => {
    return axios
      .get(`/prelogs/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        props.addPreExps(response.data);
      });
  };

  const populateReviews = (token) => {
    return axios
      .get(`/reviews/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        props.addReviews(response.data);
      });
  };

  const populateFavorites = (token) => {
    return axios
      .get(`/favorites/${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        props.addFavorites(response.data);
      });
  };

  const login = async (e) => {
    e.preventDefault();
    setPassword("");
    setUsername("");
    setDenyPopup(true);
    await axios.post("/auth/login", userObject).then((res) => {
      let token = res.data.token;
      props.setUser(username);
      populatePreLogs(token);
      populateReviews(token);
      populateFavorites(token);
      props.storeToken(token);
    });
    goHome();
  };

  const goHome = () => {
    setRedirectHome(true);
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
          {showDenyPopup ? (
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          ) : (
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon icon={faBong} size="3x" className="avatar" />
            </Avatar>
          )}

          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          {/* {showDenyPopup && (
            <p style={{ color: "orange" }}>User and/or Password incorrect.</p>
          )} */}
          <form className={classes.form} onSubmit={login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handleUsernameChange}
              value={username}
              fullWidth
              id="username"
              name="username"
              label="Username"
              type="text"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={handlePasswordChange}
              value={password}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
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
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  {"Continue As Guest"}
                </Link>
              </Grid>
              <Grid item>
                <Link to="signup" variant="body2">
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

export default LogIn;
