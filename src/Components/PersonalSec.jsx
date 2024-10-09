import React from "react";

const PersonalSec = () => {
  return (
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
  );
};

export default PersonalSec;
