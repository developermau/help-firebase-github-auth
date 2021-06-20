import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB0OawvfBQfeuwZ-vhy0poDZcpy2D3VjVY",
  authDomain: "fir-auth-react-1712b.firebaseapp.com",
  projectId: "fir-auth-react-1712b",
  storageBucket: "fir-auth-react-1712b.appspot.com",
  messagingSenderId: "1017231381237",
  appId: "1:1017231381237:web:2dbd7bdbe43415cbdc2bbc"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let auth = app.auth();

export { app, auth };
