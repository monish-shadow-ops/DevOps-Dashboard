const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Dashboard API
app.get("/api/dashboard", (req, res) => {
  res.json({
    version: "v1.0.0",
    lastDeployment: "2026-06-17 16:00",

    services: [
      {
        name: "Frontend",
        status: "Running",
      },
      {
        name: "Backend",
        status: "Running",
      },
      {
        name: "Database",
        status: "Running",
      },
    ],

    deployments: [
      {
        version: "v1.0.0",
        status: "SUCCESS",
      },
      {
        version: "v0.9.0",
        status: "SUCCESS",
      },
    ],
  });
});

app.use(
  "/api/deployments",
  require("./routes/deployments")
);

app.use(
  "/api/services",
  require("./routes/services")
);

app.use(
  "/api/releases",
  require("./routes/release")
);

app.use(
  "/api/pipelines",
  require("./routes/pipelines")
);

app.listen(5000, () => {
  console.log("API running on port 5000");
});
