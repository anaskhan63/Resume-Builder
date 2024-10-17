import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { TbWorldCode } from 'react-icons/tb';

const EducationSec = () => {
  const [educationData, setEducationData] = useState([]);
  const [formData, setFormData] = useState({
    instituteName: '',
    degree: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEducationData((prevData) => [...prevData, formData]);
    setFormData({
      instituteName: '',
      degree: '',
      date: ''
    });
  };

  const handleDelete = (idx) => {
    setEducationData(educationData.filter((_, index) => index !== idx));
  };

  return (
    <div className="p-5 bg-white rounded-md">
      <h1 className="pt-4 pb-4 text-3xl font-outfit">Education</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="text-gray-600 flex flex-col gap-2">
            Add Institute Name
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="instituteName"
              placeholder="XYZ University"
              autoComplete="off"
              required
              value={formData.instituteName}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-gray-600 flex flex-col gap-2">
            Degree & Major
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="degree"
              placeholder="Bachelors in Computer Science"
              autoComplete="off"
              required
              value={formData.degree}
              onChange={handleInputChange}
            />
          </label>
          <label className="text-gray-600 flex flex-col gap-2">
            Date
            <input
              className="p-2 rounded-md border bg-gray-50"
              type="text"
              name="date"
              placeholder="2023 - 2027"
              autoComplete="off"
              required
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className="p-3 border rounded mt-2 float-end hover:bg-gray-100">
          Add Education
        </button>
      </form>

      {/* Display added education data */}
      {educationData.length > 0 && (
        <div className="experience-map-div grid grid-cols-1 gap-4 mt-3 mb-4 p-2 rounded-md border">
          {educationData.map((education, idx) => (
            <div key={idx} className="p-3 flex items-start justify-between bg-slate-50 border rounded">
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl font-outfit">{education.instituteName}</h1>
                <p className="text-sm font-raleway">{education.degree}</p>
                <p className="text-sm font-raleway">{education.date}</p>
              </div>
              <MdDelete
                onClick={() => handleDelete(idx)}
                color="red"
                cursor="pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationSec;
