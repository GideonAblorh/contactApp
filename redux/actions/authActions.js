import firebase from "../../firebase/firebase";

export function createEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch(loggedIn(user));
    } catch (error) {}
  };
}

export function loginEmailAccount(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(logiError(error.message))
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(loggedOut())
    } catch (error) {
      dispatch(registerError(error.message))
    }
  };
}

function loggedIn(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}

function loggedOut() {
  return {
    type: "LOGGED_OUT"
  };
}

export function registerError(error){
  return{
    type:"REGISTER_ERROR",
    payload:error
  }
}

export function logiError(error){
  return{
    type:"LOGIN_ERROR",
    payload:error
  }
}
