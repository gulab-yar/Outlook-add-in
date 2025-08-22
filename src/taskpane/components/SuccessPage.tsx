// SuccessPage.tsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./Router";

const SuccessPage: React.FC = () => {
  const form = useContext(FormContext);
  const navigate = useNavigate();

  if (!form) throw new Error("FormContext not found");

  return (
    <div style={{ padding: 20, position: "relative", height: "100%" }}>
      <h2>Success!</h2>
      <p>Email: {form.chosenEmail}</p>
      {/* <p>Name: {form.firstName} {form.lastName}</p> */}
      <button
        onClick={() => navigate("/events")}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          padding: "10px 20px",
          fontSize: 16,
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SuccessPage;

