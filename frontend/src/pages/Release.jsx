import React, { useEffect, useState } from "react";
import axios from "axios";

function Releases() {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/releases")
      .then((res) => {
        setReleases(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Releases</h1>

      {releases.map((release) => (
        <div key={release.id}>
          <h3>{release.version}</h3>
          <p>{release.notes}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Releases;
