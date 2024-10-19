import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZMqNMiWKR4P51uK5nn9AF8l9g6AbQta4",
  authDomain: "simple-calorie-tracker-b6f29.firebaseapp.com",
  projectId: "simple-calorie-tracker-b6f29",
  storageBucket: "simple-calorie-tracker-b6f29.appspot.com",
  messagingSenderId: "699807330884",
  appId: "1:699807330884:web:3dc4b97148a4cfe0d5c211",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
