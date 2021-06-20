import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { auth } from "./lib/firebase";
import "./styles.css";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const handlerAuthGithub = () => {
    console.clear();
    var provider = new firebase.auth.GithubAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setToken(token);
        setUser(user);
        setIsAuth(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="App">
      {!isAuth && <button onClick={handlerAuthGithub}>Auth Github</button>}
      {isAuth && token && (
        <div>
          <pre>{JSON.stringify(user)}</pre>
        </div>
      )}
    </div>
  );
}
