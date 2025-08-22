import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  backPath?: string;
  nextPath?: string;
}

const NavigationArrows: React.FC<Props> = ({ backPath, nextPath }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
      {backPath ? (
        <button
          onClick={() => navigate(backPath)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#333",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        </button>
      ) : <div />}

      {nextPath ? (
        <button
          onClick={() => navigate(nextPath)}
          style={{
            background: "none",
            border: "none", 
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#333",
          }}
        >Next
        </button>
      ) : <div />}
    </div>
  );
};

export default NavigationArrows;
