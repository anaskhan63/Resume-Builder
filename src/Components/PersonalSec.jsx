import React, { useContext, useState } from "react";
import { ResumeDataContext } from "../Context/ResumeDataContext";
import { message } from "antd";

const PersonalSec = () => {
  const { userPersonalResumeData, setUserPersonalResumeData } = useContext(ResumeDataContext);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone_number: "",
    linkedinURL: "",
    GithubURL: "",
    Website: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserPersonalResumeData((prev) => ({
      ...prev,
      ...formData,
    }));
    setPersonalSecStatus(true)
    message.success("Data Added Successfully!");
  };

  return (
    <div className="p-5 bg-white rounded-md">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Full Name"
          autoComplete="off"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        
        <label htmlFor="position">Position</label>
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="text"
          id="position"
          name="position"
          placeholder="Enter Your Position"
          autoComplete="off"
          required
          value={formData.position}
          onChange={handleInputChange}
        />
        
        <label htmlFor="phone_number">Phone Number (optional)</label>
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="tel"
          id="phone_number"
          name="phone_number"
          placeholder="Enter Your Phone Number (optional)"
          autoComplete="off"
          value={formData.phone_number}
          onChange={handleInputChange}
        />
        
        <label htmlFor="linkedinURL">LinkedIn (optional)</label>
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="url"
          id="linkedinURL"
          name="linkedinURL"
          placeholder="Enter Your LinkedIn (optional)"
          autoComplete="off"
          value={formData.linkedinURL}
          onChange={handleInputChange}
        />
        
        <label htmlFor="GithubURL">GitHub (optional)</label>
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="url"
          id="GithubURL"
          name="GithubURL"
          placeholder="Enter Your GitHub (optional)"
          autoComplete="off"
          value={formData.GithubURL}
          onChange={handleInputChange}
        />
        
        <label htmlFor="Website">Website (optional)</label>
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="url"
          id="Website"
          name="Website"
          placeholder="Enter Your Website (optional)"
          autoComplete="off"
          value={formData.Website}
          onChange={handleInputChange}
        />
        
        <button
          type="submit"
          className="p-3 border rounded mt-2 float-end hover:bg-gray-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonalSec;
