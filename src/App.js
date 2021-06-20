import firebase from "firebase/app";
import "firebase/auth";
import { auth } from "./lib/firebase";
import "./styles.css";

export default function App() {
  const handlerAuthGithub = () => {
    // console.log("Auth");
    // console.log({ auth });
    // console.log(fb.auth);
    console.clear();
    var provider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        console.log({ credential });
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;
        console.log({ token });
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log({ user });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log({ errorCode, errorMessage, email, credential });
      });
  };
  return (
    <div className="App">
      <button onClick={handlerAuthGithub}>Auth Github</button>
    </div>
  );
}
