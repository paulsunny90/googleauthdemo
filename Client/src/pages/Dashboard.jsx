import { useEffect, useState } from "react";
import React from "react";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Dashboard
        </h2>

        {profile ? (
          <div className="bg-gray-100 rounded-xl p-4 mb-6 text-sm overflow-auto">
            <pre className="text-gray-700">
              {JSON.stringify(profile, null, 2)}
            </pre>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading profile...</p>
        )}

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
