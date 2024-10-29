import { createContext, useEffect, useState } from "react";

export const ResumeDataContext = createContext();

export const ResumeDataProvider = ({ children }) => {
  const [userPersonalResumeData, setUserPersonalResumeData] = useState([]);
  const [userExperienceContext, setuserExperienceContext] = useState([]);
  const [userSkillsTag, setuserSkillsTag] = useState([]);
  const [userProjectContext, setuserProjectContext] = useState([]);
  const [userEducationContext, setuserEducationContext] = useState([]);

  // Status states for each:
  const [PersonalSecStatus, setPersonalSecStatus] = useState(false);
  const [UserExperienceStatus, setUserExperienceStatus] = useState(false);
  const [UserSkillsTagsStatus, setUserSkillsTagsStatus] = useState(false);
  const [userProjectStatus, setProjectStatus] = useState(false);
  const [userEducationStatus, setEducationStatus] = useState(false);

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
        setuserEducationContext,
        setPersonalSecStatus,
        setUserExperienceStatus,
        setUserSkillsTagsStatus,
        setProjectStatus,
        setEducationStatus,
        PersonalSecStatus,
        UserExperienceStatus,
        UserSkillsTagsStatus,
        userProjectStatus,
        userEducationStatus,
      }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
