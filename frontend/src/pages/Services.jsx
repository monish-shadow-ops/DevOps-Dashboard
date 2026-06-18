import React, { useEffect, useState } from "react";
import axios from "axios";

function Services() {
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
      <h1>Services</h1>

      {services.map((service) => (
        <div key={service.id}>
          <strong>{service.name}</strong> - {service.status}
        </div>
      ))}
    </div>
  );
}

export default Services;
