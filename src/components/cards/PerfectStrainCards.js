import React from "react";
import axios from "axios";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Tooltip,
  Zoom,
} from "@material-ui/core/";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PerfectStrainDetailsCard from "../../containers/cards/PerfectStrainDetailsCard";
import SnackbarAddFav from "../../containers/modals/SnackbarAddFav";
import RecordPreLog from "../../containers/forms/RecordPreLog";
import PerfectStrainDescriptionCard from "../../containers/cards/PerfectStrainDescriptionCard";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  info: {
    backgroundImage:
      "url(./../indica-vs-sativa-understanding-the-difference.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "500px",
    padding: theme.spacing(8, 0, 6),
  },
  tooManyResults: {
    backgroundImage: "url(./../picky.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "500px",
    padding: theme.spacing(8, 0, 6),
  },
  noResults: {
    backgroundImage: "url(./../whole_world_in_my_hand.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "500px",
    padding: theme.spacing(8, 0, 6),
  },
}));

const BioToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#424242",
    color: "orange",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function PerfectStrainCards(props) {
  const classes = useStyles();
  const [showDetailsModal, setDetailsModal] = React.useState(false);
  const [showDescriptionModal, setDescriptionModal] = React.useState(false);
  const [strainID, setID] = React.useState(null);

  const handleDetailsModal = (e) => {
    setID(e.currentTarget.id);
    setDetailsModal(true);
  };

  const handleDescriptionModal = (e) => {
    setID(e.currentTarget.id);
    setDescriptionModal(true);
  };

  const handleAddFav = (e) => {
    setID(e.currentTarget.id);
    let fav = props.favStrainObj;
    const id = e.currentTarget.id;
    const existingFav = props.favorites.find((x) => x.strainId == id);
    let strain = props.perfectStrainResults.find((s) => s[1].id == id);
    fav.username = props.user;
    fav.strainId = strain[1].id;
    fav.strainName = strain[0];
    fav.strainSpecies = strain[1].race;
    props.setFavStrainObj(fav);
    props.setTitle(fav.strainName);
    axios.post("/favorites", fav, {
      headers: {
        Authorization: `Bearer ${props.bearerToken}`,
      },
    });
    !existingFav && props.addFavorite(fav) && props.toggleSnackbar(true);
  };

  const showSpeciesName = (x) => {
    return x.race.charAt(0).toUpperCase() + x.race.slice(1);
  };

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <SnackbarAddFav sID={strainID} />
      {showDetailsModal && (
        <PerfectStrainDetailsCard
          setDetailsModal={setDetailsModal}
          sID={strainID}
        />
      )}
      {showDescriptionModal && (
        <PerfectStrainDescriptionCard
          setDescriptionModal={setDescriptionModal}
          sID={strainID}
        />
      )}
      {props.perfectStrainResults.length === 0 && (
        <div className={classes.info}></div>
      )}

      {props.perfectStrainResults[0][1]["race"] === "no results" ? (
        <div className={classes.noResults}>
          {" "}
          <h2>
            <span style={{ color: "darkorange" }}>No Results.</span>
            <br /> Remove A Preference Or Two <br />{" "}
            <span style={{ color: "crimson" }}>Hint:</span>{" "}
            <span style={{ color: "yellow" }}>Pick at most 2 flavors.</span>
          </h2>
        </div>
      ) : props.perfectStrainResults[0][1]["race"] === "too many results" ? (
        <>
          <h2>
            <span style={{ color: "orange" }}>Too Many Results!</span> Please
            Select Another Preference. Maybe Try Adding a Flavor.
          </h2>
          <div className={classes.tooManyResults}></div>
        </>
      ) : (
        <Grid container spacing={4}>
          {props.perfectStrainResults.map((card) => (
            <Grid item key={card[1].id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={
                    card[1].race === "sativa"
                      ? "./../smoking_the_butterflies.jpg"
                      : card[1].race === "indica"
                      ? "./../spaceman.jpg"
                      : "./../hybrid_zebra.jpg"
                  }
                  title="species"
                />
                <CardContent className={classes.cardContent}>
                  <Grid container>
                    <Grid item xs={10}>
                      <Typography
                        variant="h5"
                        component="h2"
                        style={{ cursor: "pointer", color: "" }}
                        id={card[1].id}
                        onClick={(e) => handleDescriptionModal(e)}
                      >
                        <BioToolTip
                          title={
                            <React.Fragment>
                              <Typography>Click For Bio</Typography>
                            </React.Fragment>
                          }
                          placement="top"
                          TransitionComponent={Zoom}
                        >
                          <h2 className="card-title">{card[0]}</h2>
                        </BioToolTip>
                      </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                  <Typography
                    variant="h5"
                    component="h5"
                    style={{
                      color:
                        card[1].race == "sativa"
                          ? "gold"
                          : card[1].race == "indica"
                          ? "orchid"
                          : "indianred",
                    }}
                  >
                    {showSpeciesName(card[1])}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={(e) => handleDetailsModal(e)}
                    id={card[1].id}
                  >
                    <Typography>Details</Typography>
                  </Button>
                  {!props.user && (
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      id={card[1].id}
                      onClick={(e) => handleDescriptionModal(e)}
                    >
                      <Typography
                        style={{
                          fontWeight: "600",
                          color: "green",
                          textShadow: "1px 1px yellowgreen",
                        }}
                      >
                        Bio
                      </Typography>
                    </Button>
                  )}
                  {props.user && (
                    <>
                      <Button
                        size="small"
                        disableRipple
                        color="secondary"
                        variant="contained"
                        className="heartIcon"
                        id={card[1].id}
                        onClick={(e) => handleAddFav(e)}
                      >
                        <FavoriteIcon />
                      </Button>
                      <RecordPreLog
                        id={card[1].id}
                        strainName={String(card[0])}
                      />
                    </>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
