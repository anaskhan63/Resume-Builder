import React, { useState } from "react";

const PersonalSec = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone_number: "",
    linkedinURL: "",
    GithubURL: "",
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
    // Here you can handle form submission, like sending the data to an API or logging it
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="p-5 bg-white rounded-md">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
          autoComplete="off"
          required
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="text"
          name="position"
          placeholder="Enter Your Position"
          autoComplete="off"
          required
          value={formData.position}
          onChange={handleInputChange}
        />
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="tel"
          name="phone_number"
          placeholder="Enter Your Phone Number (optional)"
          autoComplete="off"
          value={formData.phone_number}
          onChange={handleInputChange}
        />
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="url"
          name="linkedinURL"
          placeholder="Enter Your Linkedin (optional)"
          autoComplete="off"
          value={formData.linkedinURL}
          onChange={handleInputChange}
        />
        <input
          className="p-2 rounded-md border bg-gray-50"
          type="url"
          name="GithubURL"
          placeholder="Enter Your Github (optional)"
          autoComplete="off"
          value={formData.GithubURL}
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
