const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", async (req,res) => {
    const data = await burger.all();

    res.render("index", { burgers: data })
});

router.post("/api/burgers", async (req,res) => {
    const data = await burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]);

    res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async (req,res) => {
    let condition = `id = ${req.params.id}`;

    console.log("condition", condition);
  
    const data = await burger.update({ devoured: req.body.devoured }, condition);
  
    if (data.changedRows === 0) {
      res.status(404).end();
    }
  
    res.status(200).end();
})

router.delete("/api/burgers/:id", (req,res) => {
    let condition = `id = ${req.params.id}`;

    const data = await burger.delete(condition);
  
    if (data.affectedRows === 0) {
      res.status(404).end();
    }
  
    res.status(200).end();
})

module.exports = router;