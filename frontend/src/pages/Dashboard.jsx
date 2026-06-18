import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {services.map((service) => (
        <div key={service.id}>
          {service.name} - {service.status}
        </div>
      ))}

      <h2>Current Version</h2>
      <p>v1.0.0</p>
    </div>
  );
}

export default Dashboard;
