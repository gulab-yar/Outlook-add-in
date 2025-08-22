import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./Router";
import NavigationArrows from "./NavigationArrows";
import { Button } from "@fluentui/react-components";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const form = useContext(FormContext);
  const navigate = useNavigate();

  if (!form) throw new Error("FormContext not found");

  const validateEmail = (email: string): boolean => {
    return email.includes("@") && email.endsWith("gmail.com");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError && validateEmail(value)) setEmailError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (passwordError && value.length >= 6) setPasswordError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Email must include '@' and end with 'gmail.com'");
      valid = false;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (!valid) return;

    const trimmedEmail = email.trim();
    form.setRawEmail(trimmedEmail);
    form.setPassword(password);

    localStorage.setItem("userEmail", trimmedEmail);
    localStorage.setItem("userPassword", password);

    navigate("/emailsuggestions");
  };

  const inputBaseStyle = {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.5rem",
    borderStyle: "solid",
    borderWidth: "1px",
    outline: "none" as const,
    transition: "border-color 0.2s ease",
  }; 

  return (
    <div style={{  margin: "0 auto ",display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center', width:'100%' }}>
      <NavigationArrows />
      <h2 style={{ marginBottom: "1rem" }}> <img src={require('../../../assets/Logo.png')} width={130} height={'auto'} alt="" /></h2>
      <div style={{textAlign:'center' ,padding:'10px'}}>Manage your events by creating and sharing Meeting links , also can create contact and attach as recipients.</div>
      <form style={{width:'100%',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}} onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            placeholder="Enter email "
            style={{
              ...inputBaseStyle,
              borderColor: emailError
                ? "red"
                : emailFocused
                ? "#007bff"
                : "#ccc",
            }}
          />
          {emailError && (
            <div style={{ color: "red", marginTop: "0.25rem" }}>{emailError}</div>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            placeholder="Enter password"
            style={{
              ...inputBaseStyle,
              borderColor: passwordError
                ? "red"
                : passwordFocused
                ? "#007bff"
                : "#ccc",
                width:'100%'
            }}
          />
          {passwordError && (
            <div style={{ color: "red", marginTop: "0.25rem" }}>{passwordError}</div>
          )}
        </div>

        <Button
          type="submit"
           appearance="primary"
           
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

