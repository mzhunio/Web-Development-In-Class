const express = require("express");
const router = express.Router();

router;
get("/", (req, res) => {
  res.send({
    items: [
      {
        id: 1,
        name: "Product 1",
      },
    ],
  });
})
  .get("/:id", (req, res) => {})
  .post("/", (req, res) => {})
  .patch("/:id", (req, res) => {})
  .delete("/:id", (req, res) => {});

module.exports = router;
