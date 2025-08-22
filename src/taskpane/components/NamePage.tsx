// // NamePage.tsx
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FormContext } from "./Router";

// const NamePage: React.FC = () => {
//   const form = useContext(FormContext);
//   const navigate = useNavigate();

//   if (!form) throw new Error("FormContext not found");

//   const [fname, setFname] = useState(form.firstName);
//   const [lname, setLname] = useState(form.lastName);

//   const handleNext = () => {
//     if (!fname || !lname) {
//       alert("Please enter first and last name");
//       return;
//     }
//     form.setFirstName(fname);
//     form.setLastName(lname);
//     navigate("/emailsuggestions");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Enter Your Name</h2>
//       <input
//         type="text"
//         placeholder="First Name"
//         value={fname}
//         onChange={(e) => setFname(e.target.value)}
//         style={{ display: "block", marginBottom: 10, width: "100%" }}
//       />
//       <input
//         type="text"
//         placeholder="Last Name"
//         value={lname}
//         onChange={(e) => setLname(e.target.value)}
//         style={{ display: "block", marginBottom: 10, width: "100%" }}
//       />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// };

// export default NamePage;

