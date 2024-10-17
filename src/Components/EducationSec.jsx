import React from 'react'
import { MdDelete } from 'react-icons/md';
import { TbWorldCode } from 'react-icons/tb';

const EducationSec = () => {
  return (
    <div className="p-5 bg-white rounded-md">
    <h1 className="pt-4 pb-4 text-3xl  font-outfit">Education</h1>
    <form  className="flex flex-col gap-4">
      {/* {AllUserProject.length > 0 ? (
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
      ) : null} */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="text-gray-600 flex flex-col gap-2">
          Add Institute Name
          <input
            className="p-2 rounded-md border bg-gray-50"
            type="text"
            name="ProjectTitle"
            placeholder="XYZ University"
            autoComplete="off"
            required
            // value={UserProject.ProjectTitle}
            // onChange={hanldeProjectOnChange}
          />
        </label>
        <label className="text-gray-600 flex flex-col gap-2">
        Degree & Major
          <input
            className="p-2 rounded-md border bg-gray-50"
            type="url"
            name="ProjectURL"
            placeholder="Bachelors in Computer Science "
            autoComplete="off"
            required
            // value={UserProject.ProjectURL}
            // onChange={hanldeProjectOnChange}
          />
        </label>
        <label className="text-gray-600 flex flex-col gap-2">
        Date
          <input
            className="p-2 rounded-md border bg-gray-50"
            type="url"
            name="ProjectURL"
            placeholder="2023 - 2027"
            autoComplete="off"
            required
            // value={UserProject.ProjectURL}
            // onChange={hanldeProjectOnChange}
          />
        </label>
      </div>
      
      <button
        type="submit"
        className="p-3 border rounded mt-2 float-end hover:bg-gray-100"
      >
        Add Education
      </button>
    </form>
  </div>
  )
}

export default EducationSec