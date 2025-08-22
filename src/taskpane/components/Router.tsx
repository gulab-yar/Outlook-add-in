
import React, { createContext, useState } from "react";

interface FormData {
  rawEmail: string;
  password: string;
  chosenEmail: string;
  setRawEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setChosenEmail: (value: string) => void;
}

export const FormContext = createContext<FormData | null>(null);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rawEmail, setRawEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chosenEmail, setChosenEmail] = useState("");

  return (
    <FormContext.Provider
      value={{ rawEmail, password, chosenEmail, setRawEmail, setPassword, setChosenEmail }}
    >
      {children}
    </FormContext.Provider>
  );
};
