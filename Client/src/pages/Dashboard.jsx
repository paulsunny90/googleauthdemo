import { useEffect, useState } from "react";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/profile", {
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
    <div >
      <h2>Dashboard</h2>

      {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
