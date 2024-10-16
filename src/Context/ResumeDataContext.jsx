import { createContext, useState } from "react";

export const ResumeDataContext = createContext();

export const ResumeDataProvider = ({ children }) => {
  const [userPersonalResumeData, setUserPersonalResumeData] = useState({});

  const [userExperienceContext, setuserExperienceContext] = useState([]);
  const [userSkillsTag, setuserSkillsTag] = useState([]);

  

  return (
    <ResumeDataContext.Provider
      value={{
        userPersonalResumeData,
        setUserPersonalResumeData,
        userExperienceContext,
        setuserExperienceContext,
        userSkillsTag,
        setuserSkillsTag
      }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
