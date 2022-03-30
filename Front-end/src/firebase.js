import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAb_ZIMETQgzahScdaTDhulld5_Nxh6le4",
    authDomain: "biligram-c87cb.firebaseapp.com",
    projectId: "biligram-c87cb",
    storageBucket: "biligram-c87cb.appspot.com",
    messagingSenderId: "166046558311",
    appId: "1:166046558311:web:bf106d6d185a138eb48cc2",
  })
  .auth();
