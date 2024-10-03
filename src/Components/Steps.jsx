import React from 'react';
import { Timeline } from 'antd';

const ResumeCreationSteps = () => {
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Create Your Resume In Four Simple Steps</h2>
      <Timeline>
        <Timeline.Item>
          <h3 className="font-semibold">Step 1: Choose a Template</h3>
          <p>Select a resume template that best suits your style and profession.</p>
        </Timeline.Item>
        <Timeline.Item>
          <h3 className="font-semibold">Step 2: Add Your Data</h3>
          <p>Fill in your personal details, work experience, education, and skills.</p>
        </Timeline.Item>
        {/* <Timeline.Item>
          <h3 className="font-semibold">Step 3: Review Your Information</h3>
          <p>Check for any errors or missing information before finalizing.</p>
        </Timeline.Item> */}
        <Timeline.Item>
          <h3 className="font-semibold">Step 4: Download Your ATS-Friendly Resume</h3>
          <p>Click the download button to get your resume in an ATS-friendly format.</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default ResumeCreationSteps;
