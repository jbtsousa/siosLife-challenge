import "./Login.css";
import { Input } from "./input/Input.jsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState(""); //initial value is empty
  const [password, setPassword] = useState("");
  //Error message
  let [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); //Avoids losing values on submit click
    console.log("Email: " + email);
    if (password.length < 12) {
      setShowError(true); // Updates the state to show the error message
    } else {
      //Login was successful, go to next page
      navigate("/dashboard");
    }
  };

  return (
    <div id="container">
      <div id="form-container">
        <form onSubmit={handleSubmit}>
          <Input
            label="Email:"
            type="email"
            id="email"
            placeholder="Insira aqui o seu email"
            setState={setEmail}
          />
          <Input
            label="Password:"
            type="password"
            id="password"
            placeholder="Insira aqui a palavra-chave"
            setState={setPassword}
          />

          <button type="submit" id="login">
            Entrar
          </button>

          <div className="feedback" id="error-container">
            {showError && (
              <p style={{ color: "red" }}>
                Erro, a palavra-chave deve ter 12 ou mais caracteres!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
