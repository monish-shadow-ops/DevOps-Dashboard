const router = require("express").Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM services"
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
