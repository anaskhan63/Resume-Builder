import React, { useState } from "react";
import Button from "../Components/Button";
const TemplateOne = () => {
  const [tags, setTags] = useState([]); // Store tags
  const [input, setInput] = useState(""); // Store current input

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault(); // Prevent form submission or adding commas
      if (input.trim()) {
        setTags([...tags, input.trim()]); // Add the new tag
        setInput(""); // Clear the input field
      }
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <main className=" p-5 bg-[#F9FAFB]">
      {/* taking data for resume */}
      <section className=" p-4 rounded-lg flex flex-col gap-9">
        <div className="p-5 bg-white rounded-md">
          <form className="flex flex-col gap-4">
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              autoComplete="off"
              required
            />
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="position"
              placeholder="Enter Your Position"
              autoComplete="off"
              required
            />
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="tel"
              name="phone_number"
              placeholder="Enter Your Phone Number (optional)"
              autoComplete="off"
            />
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="url"
              name="linkedinURL"
              placeholder="Enter Your Linkedin (optional)"
              autoComplete="off"
            />
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="url"
              name="GithubURL"
              placeholder="Enter Your Github (optional)"
              autoComplete="off"
            />
          </form>
        </div>

        <div className="p-5 bg-white rounded-md">
          <h1 className="pt-4 pb-4 text-3xl  font-outfit">
            Experience and Skills
          </h1>
          <form className="flex flex-col gap-4">
            <div className="exp">
              <div className="inputData">
                <div className="grid grid-cols-3 gap-3">
                  <label className="text-gray-600 flex flex-col gap-2">
                    Company Name
                    <input
                      className="p-2 rounded-md border bg-gray-50"
                      type="text"
                      name="CompanyName"
                      placeholder="Enter Company Name"
                      autoComplete="off"
                      required
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
                    />
                  </label>
                  <label className="text-gray-600 flex flex-col gap-2">
                    Date
                    <input
                      className="p-2 rounded-md border bg-gray-50"
                      type="text"
                      name="CompanyEmpJoiningEndingData"
                      placeholder="2023 - present"
                      autoComplete="off"
                      required
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
              </div>
            </div>
            <div className="skills w-full">
              <div className="w-full flex gap-2 items-center ">
                {tags.map((tag, index) => (
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
                    tags.length === 0 ? "" : "mt-3"
                  } `}
                  type="text"
                  placeholder="Add a skill and press Enter"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </label>
            </div>
          </form>
        </div>

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
      </section>
      <div className="flex justify-center p-5">
        <Button Title={"Generate Resume"} />
      </div>
    </main>
  );
};

export default TemplateOne;
