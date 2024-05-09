import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const EditEntityForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const entityId = searchParams.get("id");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/entities/${entityId}`).then(res => {
        return res.json()
    }).then(data => {
        setFormData({
            name: data.name,
            email: data.email,
            mobileNumber: data.mobileNumber,
            dateOfBirth: data.dateOfBirth
        })
    }).catch (err => {
        console.log(err)
    })
  }, []);

  const handleEdit = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/entities/${entityId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        console.log("Entity updated successfully");
        navigate("/");
      } else {
        console.error("Error updating entity:", res.status);
      }
    } catch (err) {
      console.error("Error updating entity:", err);
    }
  };
  

  return (
    <div className="entity-form flex flex-col gap-4 p-8 rounded-lg shadow-lg bg-gray-900 text-white">
      <h2 className="text-purple-500 text-3xl font-bold mb-4">Edit Entity</h2>
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="input-field bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="input-field bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mobileNumber" className="text-gray-300">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            className="input-field bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dateOfBirth" className="text-gray-300">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Select Date of Birth"
            className="input-field bg-gray-800 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          className="bg-purple-500 text-white mt-4 px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
          onClick={() => {
            handleEdit();
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditEntityForm;
