import { connect } from "react-redux";
import PerfectStrainCards from "../../components/cards/PerfectStrainCards";
import {
  setUser,
  fetchAllStrains,
  fetchUserSearchResults,
  setSpeciesPrefs,
  fetchDescription,
  fetchEffects,
  fetchFlavors,
  setUserSearchInput,
  addFavorite,
  toggleSnackbar,
  setPerfectStrainResults,
  setTitle,
  toggleLoading,
  setFavStrainObj,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    bearerToken: state.bearerToken,
    userSearchResults: state.userSearchResults,
    allStrains: state.allStrains,
    searchParams: state.searchParams,
    userSearchInput: state.userSearchInput,
    effects: state.effects,
    posPrefs: state.posPrefs,
    avoidPrefs: state.avoidPrefs,
    medPrefs: state.medPrefs,
    flavPrefs: state.flavPrefs,
    speciesPrefs: state.speciesPrefs,
    favorites: state.favorites,
    toggleSnackbar: state.toggleSnackbar,
    perfectStrainResults: state.perfectStrainResults,
    title: state.title,
    isLoading: state.isLoading,
    favStrainObj: state.favStrainObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(setUser(username)),
    fetchAllStrains: () => dispatch(fetchAllStrains()),
    fetchUserSearchResults: (input) => dispatch(fetchUserSearchResults(input)),
    setUserSearchInput: (input) => dispatch(setUserSearchInput(input)),
    setSpeciesPrefs: (input) => dispatch(setSpeciesPrefs(input)),
    fetchDescription: (input) => dispatch(fetchDescription(input)),
    fetchEffects: (input) => dispatch(fetchEffects(input)),
    fetchFlavors: (input) => dispatch(fetchFlavors(input)),
    addFavorite: (fav) => dispatch(addFavorite(fav)),
    toggleSnackbar: (input) => dispatch(toggleSnackbar(input)),
    setPerfectStrainResults: (results) =>
      dispatch(setPerfectStrainResults(results)),
    setTitle: (input) => dispatch(setTitle(input)),
    toggleLoading: (input) => dispatch(toggleLoading(input)),
    setFavStrainObj: (fav) => dispatch(setFavStrainObj(fav)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PerfectStrainCards);
