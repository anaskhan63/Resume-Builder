import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ResumeDataContext } from "../Context/ResumeDataContext";

const ExpANDSkillSec = () => {
  const { userExperienceContext, setuserExperienceContext, userSkillsTag, setuserSkillsTag } =
    useContext(ResumeDataContext);
  console.log("userExperienceContext", userExperienceContext);
  console.log("userSkillsTagContext", userSkillsTag);

  const [Skillstags, setSkillsTags] = useState([]);
  const [Skillsinput, setSkillsInput] = useState("");

  const [CompanyEXP, setCompanyEXP] = useState([]);

  const [CompanyEXPData, setCompanyEXPData] = useState({
    CompanyName: "",
    CompanyPosition: "",
    CompanyJoiningDate: "",
    companyJobDescription: "",
  });

  const handleCompanyExpOnChange = (e) => {
    const { name, value } = e.target;
    setCompanyEXPData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    setCompanyEXP((prev) => [...prev, CompanyEXPData]);
    setuserExperienceContext((prev) => [...prev, CompanyEXPData]);
  };

  const handleCompanyExperienceDelete = (indexToDelete) => {
    const updatedCompanyEXP = CompanyEXP.filter(
      (_, index) => index !== indexToDelete
    );
    setCompanyEXP(updatedCompanyEXP);
    setuserExperienceContext(updatedCompanyEXP);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      if (Skillsinput.trim()) {
        setSkillsTags([...Skillstags, Skillsinput.trim()]);
        setuserSkillsTag([...userSkillsTag, Skillsinput.trim()])
        setSkillsInput("");
      }
    }
  };

  const removeTag = (indexToRemove) => {
    const updatedSkills =(Skillstags.filter((_, index) => index !== indexToRemove));
    setSkillsTags(updatedSkills);
    setuserSkillsTag(updatedSkills);
  };

  return (
    <div className="p-5 bg-white rounded-md">
      <h1 className="pt-4 pb-4 text-3xl  font-outfit">Experience and Skills</h1>
      <form onSubmit={handleExperienceSubmit} className="flex flex-col gap-4">
        <div className="exp">
          <div className="inputData">
            {CompanyEXP.length > 0 ? (
              <div className="experience-map-div grid grid-cols-1 gap-4 mt-3 mb-4 p-2 rounded-md border">
                {CompanyEXP.map((currElem, idx) => {
                  return (
                    <div
                      key={idx}
                      className="p-3 flex items-start justify-between bg-slate-50 border rounded"
                    >
                      <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-xl font-outfit">
                          {currElem.CompanyName}
                        </h1>
                        <p className="text-sm font-raleway">
                          {currElem.CompanyPosition}
                        </p>
                        <p className="text-sm font-raleway">
                          {currElem.CompanyJoiningDate}
                        </p>
                        <p className="text-sm font-raleway">
                          {currElem.companyJobDescription}
                        </p>
                      </div>
                      <MdDelete
                        onClick={() => handleCompanyExperienceDelete(idx)}
                        color="red"
                        cursor="pointer"
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <label className="text-gray-600 flex flex-col gap-2">
                Company Name
                <input
                  className="p-2 rounded-md border bg-gray-50"
                  type="text"
                  name="CompanyName"
                  placeholder="Enter Company Name"
                  autoComplete="off"
                  required
                  value={CompanyEXPData.CompanyName}
                  onChange={handleCompanyExpOnChange}
                />
              </label>
              <label className="text-gray-600 flex flex-col gap-2">
                Position
                <input
                  className="p-2 rounded-md border bg-gray-50"
                  type="text"
                  name="CompanyPosition"
                  placeholder="Enter Your Position"
                  autoComplete="off"
                  required
                  value={CompanyEXPData.CompanyPosition}
                  onChange={handleCompanyExpOnChange}
                />
              </label>
              <label className="text-gray-600 flex flex-col gap-2">
                Date
                <input
                  className="p-2 rounded-md border bg-gray-50"
                  type="text"
                  name="CompanyJoiningDate"
                  placeholder="2023 - present"
                  autoComplete="off"
                  required
                  value={CompanyEXPData.CompanyJoiningDate}
                  onChange={handleCompanyExpOnChange}
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
                value={CompanyEXPData.companyJobDescription}
                onChange={handleCompanyExpOnChange}
              ></textarea>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="p-3 border rounded mt-2 float-end hover:bg-gray-100"
        >
          Add Experience
        </button>
      </form>
      <div className="skills w-full mt-3">
        <div className="w-full flex gap-2 items-center ">
          {Skillstags.map((tag, index) => (
            <div
              className="bg-gray-500 text-white px-3 py-1 rounded-md"
              key={index}
            >
              {tag}
              <span
                className="remove-tag cursor-pointer"
                onClick={() => removeTag(index)}
              >
                &times;
              </span>
            </div>
          ))}
        </div>
        <label className="text-gray-600 flex flex-col gap-2">
          Enter Skill's
          <input
            className={`w-full p-2 rounded-md border bg-gray-50 ${
              Skillstags.length === 0 ? "" : "mt-3"
            } `}
            type="text"
            placeholder="Add a skill and press Enter"
            value={Skillsinput}
            onChange={(e) => setSkillsInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </label>
      </div>
    </div>
  );
};

export default ExpANDSkillSec;
