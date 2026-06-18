import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

function Deployments() {

  const [deployments,setDeployments] =
    useState([]);

  useEffect(() => {

    axios
      .get(
        "http://localhost:5000/api/deployments"
      )
      .then(res => {
        setDeployments(res.data);
      });

  }, []);

  return (
    <div>

      <h1>Deployments</h1>

      {deployments.map(dep => (

        <div key={dep.id}>

          {dep.version}
          {" - "}
          {dep.status}

        </div>

      ))}

    </div>
  );
}

export default Deployments;
