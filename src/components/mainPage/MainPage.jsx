import { Welcome } from "../welcome/Welcome";
import { Login } from "../login/Login";
import "./mainPage.css";
export const MainPage = () => {
  return (
    <div id="main">
      <Welcome />
      <Login />
    </div>
  );
};
