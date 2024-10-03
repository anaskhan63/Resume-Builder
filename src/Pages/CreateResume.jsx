import React, { useContext } from 'react';
import { TemplateContext } from '../Context/TemplateContext';
import { message } from 'antd';

const CreateResume = () => {
  const { selectedTemplate } = useContext(TemplateContext);

  if (!selectedTemplate) {
    message.error("No Template selected");
    return null; 
  }

  return (
    <main>
      {selectedTemplate === "template1" && (
        <div>
          <h1>Template 1 Selected</h1>
          <h1>Template 1 Selected</h1>
          <h1>Template 1 Selected</h1>
        </div>
      )}
      {selectedTemplate === "template2" && <h1>Template 2 Selected</h1>}
      {selectedTemplate === "template3" && <h1>Template 3 Selected</h1>}
    </main>
  );
};

export default CreateResume;
