export const setUser = (username) => {
  return {
    type: "USER",
    value: username,
  };
};

export const setPreTokeForm = (input) => {
  return {
    type: "SET_PRE_TOKE",
    value: input,
  };
};

export const setReviewForm = (input) => {
  return {
    type: "SET_REVIEW",
    value: input,
  };
};

export const setProfile = (input) => {
  return {
    type: "SET_PROFILE",
    value: input,
  };
};

export const addPreExp = (exp) => {
  return {
    type: "ADD_PRE_EXP",
    value: exp,
  };
};

export const addPreExps = (exps) => {
  return {
    type: "ADD_PRE_EXPS",
    value: exps,
  };
};

export const addReview = (exp) => {
  return {
    type: "ADD_REVIEW",
    value: exp,
  };
};

export const clearPreLogs = (input) => {
  return {
    type: "CLEAR_PRE_LOGS",
    value: input,
  };
};

export const clearReviews = (input) => {
  return {
    type: "CLEAR_REVIEWS",
    value: input,
  };
};

export const clearFavorites = (input) => {
  return {
    type: "CLEAR_FAVORITES",
    value: input,
  };
};

export const clearExperiences = (input) => {
  return {
    type: "CLEAR_EXPERIENCES",
    value: input,
  };
};

export const addReviews = (exps) => {
  return {
    type: "ADD_REVIEWS",
    value: exps,
  };
};

export const setTitle = (input) => {
  return {
    type: "SET_TITLE",
    value: input,
  };
};

export const toggleDrawer = (input) => {
  return {
    type: "DRAWER_OPEN",
    value: input,
  };
};

export const toggleSnackbar = (input) => {
  return {
    type: "SNACKBAR_OPEN",
    value: input,
  };
};

export const toggleFindPerfectStrain = (input) => {
  return {
    type: "FIND_PERFECT_STRAIN_MODAL_OPEN",
    value: input,
  };
};

export const toggleLoading = (input) => {
  return {
    type: "IS_LOADING",
    value: input,
  };
};

export const fetchAllStrains = () => {
  return async (dispatch) => {
    await fetch(`https://strainapi.evanbusse.com/jXftQqp/strains/search/all`)
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "ALL_STRAINS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const setPerfectStrainResults = (results) => {
  return {
    type: "SET_PERFECT_STRAIN_RESULTS",
    value: results,
  };
};

export const fetchUserSearchResults = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/search/name/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "USER_SEARCH_RESULTS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const storeToken = (input) => {
  return {
    type: "BEARER_TOKEN",
    value: input,
  };
};

// export const storeToken = (input) => {
//   return async (dispatch) => {
//     await fetch("/auth/login", {
//       method: "POST",
//       body: JSON.stringify(input),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((response) => {
//         const action = {
//           type: "BEARER_TOKEN",
//           value: response.token,
//         };
//         dispatch(action);
//       });
//   };
// };

export const addUser = (input) => {
  return async (dispatch) => {
    await fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "AUTH_LOGIN",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const fetchEffects = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/data/effects/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "EFFECTS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const fetchFlavors = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/data/flavors/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "FLAVORS",
          value: response,
        };
        dispatch(action);
      });
  };
};

export const fetchDescription = (input) => {
  return async (dispatch) => {
    await fetch(
      `https://strainapi.evanbusse.com/jXftQqp/strains/data/desc/${input}`
    )
      .then((res) => res.json())
      .then((response) => {
        const action = {
          type: "STRAIN_DESCRIPTION",
          value: response.desc,
        };
        dispatch(action);
      });
  };
};

export const setUserPrefsObj = (prefsObj) => {
  return {
    type: "SET_USER_PREFS",
    value: prefsObj,
  };
};

export const populatePrefs = (prefsObj) => {
  return {
    type: "POPULATE_USER_PREFS",
    value: prefsObj,
  };
};

export const setFavStrainObj = (fav) => {
  return {
    type: "SET_FAV",
    value: fav,
  };
};

export const addFavorite = (fav) => {
  return {
    type: "ADD_FAVORITE",
    value: fav,
  };
};

export const removeFavorite = (id) => {
  return {
    type: "REMOVE_FAVORITE",
    value: id,
  };
};

export const addFavorites = (arr) => {
  return {
    type: "ADD_FAVORITES",
    value: arr,
  };
};

export const removeListing = (id) => {
  return {
    type: "REMOVE_LISTING",
    value: id,
  };
};

export const setSearchParams = (searchParams) => {
  return {
    type: "SEARCH_PARAMS",
    value: searchParams,
  };
};

export const setUserSearchInput = (input) => {
  return {
    type: "USER_INPUT",
    value: input,
  };
};

export const setPosPrefs = (input) => {
  return {
    type: "POS_PREFS",
    value: input,
  };
};

export const setAvoidPrefs = (input) => {
  return {
    type: "AVOID_PREFS",
    value: input,
  };
};

export const setMedPrefs = (input) => {
  return {
    type: "MED_PREFS",
    value: input,
  };
};

export const setFlavPrefs = (input) => {
  return {
    type: "FLAV_PREFS",
    value: input,
  };
};

export const setSpeciesPrefs = (input) => {
  return {
    type: "SPECIES_PREFS",
    value: input,
  };
};

export const resetAllStrains = (input) => {
  return {
    type: "RESET_RESULTS",
    value: input,
  };
};
