import React, { useEffect, useState } from "react";
import axios from "axios";

function Pipelines() {
  const [pipelines, setPipelines] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pipelines")
      .then((res) => {
        setPipelines(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Pipeline History</h1>

      {pipelines.map((pipeline) => (
        <div key={pipeline.id}>
          <h3>Build #{pipeline.build_number}</h3>
          <p>Status: {pipeline.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Pipelines;
