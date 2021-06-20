import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { auth } from "./lib/firebase";
import "./styles.css";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const handlerLoginGithub = () => {
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

  const handlerLogOutGithub = () => {
    auth
      .signOut()
      .then(() => {
        setToken(null);
        setUser(null);
        setIsAuth(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      {!isAuth && <button onClick={handlerLoginGithub}>Log In Github</button>}
      {isAuth && token && (
        <div>
          <p>
            {user.displayName} ({user.uid})
          </p>
          <p>Token: ${token}</p>
          <img
            src={user.photoURL}
            alt={`User ${user.uid}`}
            width="20"
            height="20"
          />
          <br />
          <button onClick={handlerLogOutGithub}>Sign Out Github</button>
        </div>
      )}
    </div>
  );
}
