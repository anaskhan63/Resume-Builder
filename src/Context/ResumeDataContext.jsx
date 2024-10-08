import { createContext, useState } from "react";

export const ResumeDataContext = createContext();

export const ResumeDataProvider = ({ children }) => {
  const [userPersonalResumeData, setUserPersonalResumeData] = useState({
    Name: "",
    Position: "",
    PhoneNumber: "",
    Linkedin: "",
    Github: "",
    Website: "",
  });

  const [userExpSkills, setUserExpSkills] = useState({
    CompanyName: "",
    CompanyPosition: "",
    CompanyDate: "",
    CompanyDescription: "", // Corrected typo from "CompanyDesription" to "CompanyDescription"
    Skills: [],
  });

  return (
    <ResumeDataContext.Provider value={{ userPersonalResumeData, setUserPersonalResumeData, userExpSkills, setUserExpSkills }}>
      {children}
    </ResumeDataContext.Provider>
  );
};
