import React from "react";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./LoginPage";
import EmailSuggestionsPage from "./EmailSuggestionsPage";
import EventTypes from "./EventTypes";
import { FormProvider } from "./Router";

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/emailsuggestions" element={<EmailSuggestionsPage />} />
          <Route path="/events" element={<EventTypes />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </FormProvider>
    </MemoryRouter>
  );
};

export default App;

