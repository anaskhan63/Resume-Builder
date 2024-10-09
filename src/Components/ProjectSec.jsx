import React from "react";

const ProjectSec = () => {
  return (
    <div className="p-5 bg-white rounded-md">
      <h1 className="pt-4 pb-4 text-3xl  font-outfit">Project's</h1>
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <label className="text-gray-600 flex flex-col gap-2">
            Add Project
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="Project"
              placeholder="Enter Project Name"
              autoComplete="off"
              required
            />
          </label>
          <label className="text-gray-600 flex flex-col gap-2">
            Add Project URL (optional)
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="ProjectURL"
              placeholder="https://anas-khan-portfolio.vercel.app/"
              autoComplete="off"
            />
          </label>
        </div>
        <label className="mt-3 text-gray-600 flex flex-col gap-2">
          Description
          <textarea
            placeholder="Just describe as a prompt"
            className="p-2 rounded-md border bg-gray-50"
            maxLength={100}
            name="companyJobDescription"
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default ProjectSec;
