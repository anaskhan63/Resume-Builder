import { createContext, useContext, useState } from "react";
import { ResumeDataContext } from "./ResumeDataContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the context
export const GenerateDataByGemeniContext = createContext();

const ApiKey = import.meta.env.VITE_GEMENI_API_KEY;

export const GenerateDataByGemeniProvider = ({ children }) => {
  const {
    userExperienceContext,
    userSkillsTag,
    userProjectContext,
    userEducationContext,
  } = useContext(ResumeDataContext);

  // State to store Gemini response
  const [GemeniUserExperienceResponse, setGemeniUserExperienceResponse] = useState("");
console.log("userExperienceContext.companyJobDescription",userExperienceContext.companyJobDescription);

  const GetExpPromptData = async () => {
    try {
      const genAI = new GoogleGenerativeAI(ApiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Generate 2-3 concise and impactful resume lines based on the following job description: ${userExperienceContext.companyJobDescription}. Provide only the resume lines without any additional commentary or explanations.`;
      const result = await model.generateContent(prompt); // Adjust the API call based on actual method available
      const responseText = await result?.response.text(); // Adjust response extraction based on API response format
      setGemeniUserExperienceResponse(responseText);
    } catch (error) {
      console.error("Error generating Gemini data:", error);
    }
  };

  return (
    <GenerateDataByGemeniContext.Provider value={{ GetExpPromptData, GemeniUserExperienceResponse }}>
      {children}
    </GenerateDataByGemeniContext.Provider>
  );
};
