import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuSrqFJm6_LbWXCucOPU6RPaVb7-Lw2EY",
  authDomain: "rnfirebase-651d5.firebaseapp.com",
  databaseURL: "https://rnfirebase-651d5.firebaseio.com",
  projectId: "rnfirebase-651d5",
  storageBucket: "rnfirebase-651d5.appspot.com",
  messagingSenderId: "726979550460",
  appId: "1:726979550460:web:10fdcd8d90ba8109454b79",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
