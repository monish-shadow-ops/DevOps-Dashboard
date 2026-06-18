const router = require("express").Router();
const db = require("../db");

router.get("/", async (req,res) => {
  const result = await db.query(
    "SELECT * FROM services"
  );

  res.json(result.rows);
});

module.exports = router;
