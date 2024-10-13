import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbWorldCode } from "react-icons/tb";

const ProjectSec = () => {
  const [AllUserProject, setAllUserProject] = useState([]);
  const [UserProject, setUserProject] = useState({
    ProjectTitle: "",
    ProjectURL: "",
    ProjectDescription: "",
  });

  const hanldeProjectOnChange = (e) => {
    const { name, value } = e.target;
    setUserProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    setAllUserProject((prev) => [...prev, UserProject]);
    setUserProject({
      ProjectTitle: "",
      ProjectURL: "",
      ProjectDescription: "",
    })
  };

  const handleUserProjectDelete = (Currentidx) => {
    setAllUserProject(
      AllUserProject.filter((_, index) => index !== Currentidx)
    );
    
  };
  console.log("all prjects", AllUserProject);

  return (
    <div className="p-5 bg-white rounded-md">
      <h1 className="pt-4 pb-4 text-3xl  font-outfit">Project's</h1>
      <form onSubmit={handleProjectSubmit} className="flex flex-col gap-4">
        {AllUserProject.length > 0 ? (
          <div className="experience-map-div grid grid-cols-1 gap-4 mt-3 mb-4 p-2 rounded-md border">
            {AllUserProject.map((currElem, idx) => {
              return (
                <div key={idx} className="p-3 flex items-start justify-between bg-slate-50 border rounded">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl font-outfit">
                      {currElem.ProjectTitle}
                    </h1>
                    <a
                      target="_blank"
                      className="flex gap-2 items-center"
                      href={currElem.ProjectURL}
                    >
                      <TbWorldCode />
                      Visit Demo
                    </a>
                    <p className="text-sm font-raleway">
                      {currElem.ProjectDescription}
                    </p>
                  </div>
                  <div>
                    <MdDelete
                      onClick={() => handleUserProjectDelete(idx)}
                      color="red"
                      cursor="pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
        <div className="grid grid-cols-2 gap-4">
          <label className="text-gray-600 flex flex-col gap-2">
            Add Project
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="ProjectTitle"
              placeholder="Enter Project Name"
              autoComplete="off"
              required
              value={UserProject.ProjectTitle}
              onChange={hanldeProjectOnChange}
            />
          </label>
          <label className="text-gray-600 flex flex-col gap-2">
            Add Project URL (optional)
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="url"
              name="ProjectURL"
              placeholder="https://anas-khan-portfolio.vercel.app/"
              autoComplete="off"
              value={UserProject.ProjectURL}
              onChange={hanldeProjectOnChange}
            />
          </label>
        </div>
        <label className="mt-3 text-gray-600 flex flex-col gap-2">
          Description
          <textarea
            placeholder="Just describe as a prompt"
            className="p-2 rounded-md border bg-gray-50"
            maxLength={200}
            name="ProjectDescription"
            value={UserProject.ProjectDescription}
            onChange={hanldeProjectOnChange}
          ></textarea>
        </label>
        <button
          type="submit"
          className="p-3 border rounded mt-2 float-end hover:bg-gray-100"
        >
          Add Experience
        </button>
      </form>
    </div>
  );
};

export default ProjectSec;
