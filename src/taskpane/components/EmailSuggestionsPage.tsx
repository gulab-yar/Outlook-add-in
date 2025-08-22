import React, { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./Router";
import NavigationArrows from "./NavigationArrows";

const Toast: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#4BB543",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};

const EmailSuggestionsPage: React.FC = () => {
  const form = useContext(FormContext);
  const navigate = useNavigate();

  const [selectedEmail, setSelectedEmail] = useState<string>("");
  const [showToast, setShowToast] = useState(false);

  if (!form) throw new Error("FormContext not found");

  const fullEmail = form.rawEmail.toLowerCase();
  const namePart = fullEmail.split("@")[0];

  const suggestions = useMemo(() => [
    `${namePart}@example.com`,
    `${namePart.replace(/\./g, "")}${Math.floor(Math.random() * 100)}@example.com`,
    `${namePart.charAt(0)}_${namePart.slice(1)}@example.com`,
  ], [namePart]);

  const handleNext = () => {
    if (!selectedEmail) return;

    form.setChosenEmail(selectedEmail);
    localStorage.setItem("chosenEmail", selectedEmail);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/events");
    }, 1500);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <NavigationArrows backPath="/login" />
      <h2>Choose an Email</h2>
      <form>
        {suggestions.map((email, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <input
                type="radio"
                name="emailSuggestion"
                value={email}
                checked={selectedEmail === email}
                onChange={() => setSelectedEmail(email)}
                style={{ marginRight: "10px" }}
              />
              {email}
            </label>
          </div>
        ))}
      </form>

      <button
        onClick={handleNext}
        disabled={!selectedEmail}
        style={{
          width: "100%",
          padding: "0.75rem",
          backgroundColor: selectedEmail ? "#007bff" : "#ccc",
          color: "white",
          border: "none",
          cursor: selectedEmail ? "pointer" : "not-allowed",
        }}
      >
        Next
      </button>

      {showToast && <Toast message="Successfully!" />}
    </div>
  );
};

export default EmailSuggestionsPage;

