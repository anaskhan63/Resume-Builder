import React, { useContext } from "react";
import { TemplateContext } from "../Context/TemplateContext";
import { message } from "antd";
import TemplateOne from "./TemplateOne";
import { useNavigate } from "react-router-dom";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const ApiKey = import.meta.env.VITE_GEMENI_API_KEY;
// const genAI = new GoogleGenerativeAI(ApiKey);
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const CreateResume = () => {
  //   async function aiRun() {
  //     const prompt = "hello gemni";
  //     const result = await model.generateContent(prompt);
  //     const response = await result.response;
  //     const text = response.text();
  //     console.log("REs", text);
  //   }

  //   aiRun();

  
  const { selectedTemplate } = useContext(TemplateContext);
  const navigate = useNavigate();
  if (!selectedTemplate) {
    message.error("Please Select Template first");
    message.loading("Redirecting to Templates")
    setInterval(() => {
      navigate("/templates");
    }, 2900);
    return null;
  }

  return (
    <main>
      {selectedTemplate === "template1" && <TemplateOne />}
      {selectedTemplate === "template2" && <h1><TemplateTwo/> </h1>}
      {selectedTemplate === "template3" && <h1><TemplateThree/> </h1>}
    </main>
  );
};

export default CreateResume;
