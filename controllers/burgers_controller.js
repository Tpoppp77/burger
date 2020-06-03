const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", async (req,res) => {
    const data = await burger.all();

    res.render("index", { burgers: data })
});

router.post("/api/burgers", async (req,res) => {

});

router.put("/api/burgers/:id", async (req,res) => {

})

router.delete("/api/burgers/:id", (req,res) => {

})

module.exports = router;