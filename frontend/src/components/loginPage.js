import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import Auth from "./auth";
import mushroom from "./mushroom.gif";
import mapleaudio from "./mapleaudio.mp3";
import "./loginPage.css";

function LoginPage() {
  return (
    <div className="header">
      <img src={mushroom} className="mushroom" alt="loading..." />
      <LoginButton />
      <LogoutButton />
      <Auth />
      <audio src={mapleaudio} controls className="music">
        <embed src={mapleaudio} autostart="true" width="300" height="90" />
      </audio>
    </div>
  );
}

export default LoginPage;