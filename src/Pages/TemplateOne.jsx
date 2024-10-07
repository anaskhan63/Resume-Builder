import React, { useState } from "react";

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
    <main className=" p-5">
      {/* taking data for resume */}
      <section className="bg-gray-100 p-4 rounded-lg flex flex-col gap-9">
        <div className="p-5 bg-white  border ">
          <h1 className="pt-4 pb-4 text-3xl text-center font-outfit">
            Please Enter Your Details
          </h1>
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

            <div className="">
              <div className="flex gap-2 items-center ">
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
              <input
                className={`p-2 rounded-md border bg-gray-50 ${
                  tags.length === 0 ? "" : "mt-3"
                } `}
                type="text"
                placeholder="Add a skill and press Enter"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default TemplateOne;
