import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/entities");
        if (!response.ok) {
          throw new Error("Error fetching entities");
        }
        const data = await response.json();
        setEntities(data);
      } catch (err) {
        console.error("Error fetching entities:", err);
      }
    };

    fetchEntities();
  }, [entities]);

  const handleDelete = async (entityId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/entities/${entityId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Error deleting entity");
      }
      console.log("Entity deleted successfully");
    } catch (err) {
      console.error("Error deleting entity:", err);
    }
  };

  return (
    <div className="entity-list bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2>Entity List</h2>
      {entities.length > 0 ? (
        <ul className="list-none">
          {entities.map((entity) => (
            <li
              key={entity._id}
              className="entity-item px-4 py-2 mb-2 border border-gray-700 rounded hover:bg-gray-800"
            >
              <div className="flex flex-col gap-2">
                <p className="text-gray-300">Name: {entity.name}</p>
                <p className="text-gray-300">Email: {entity.email}</p>
                <p className="text-gray-300">
                  Mobile Number: {entity.mobileNumber}
                </p>
                <p className="text-gray-300">
                  Date of Birth: {entity.dateOfBirth}
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Link to={`/edit?id=${entity._id}`}>
                  <button className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-purple-600 transition duration-300">
                    Edit
                  </button>
                </Link>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(entity._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 text-center">No entities found.</p>
      )}
    </div>
  );
};

export default EntityList;
