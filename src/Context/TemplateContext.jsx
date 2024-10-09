import { createContext, useState } from "react";

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  console.log("currtemp: ",selectedTemplate);
  
  return (
    <TemplateContext.Provider value={{ selectedTemplate, setSelectedTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};
