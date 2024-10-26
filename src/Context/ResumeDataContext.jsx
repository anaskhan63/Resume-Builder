import { createContext, useState } from "react";

export const ResumeDataContext = createContext();

export const ResumeDataProvider = ({ children }) => {
  const [userPersonalResumeData, setUserPersonalResumeData] = useState({});

  const [userExperienceContext, setuserExperienceContext] = useState([]);
  const [userSkillsTag, setuserSkillsTag] = useState([]);
  const [userProjectContext, setuserProjectContext] = useState([]);
  const [userEducationContext, setuserEducationContext] = useState([]);

  

  return (
    <ResumeDataContext.Provider
      value={{
        userPersonalResumeData,
        setUserPersonalResumeData,
        userExperienceContext,
        setuserExperienceContext,
        userSkillsTag,
        setuserSkillsTag,
        userProjectContext,
        setuserProjectContext,
        userEducationContext,
        setuserEducationContext
      }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
