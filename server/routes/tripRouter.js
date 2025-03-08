const express = require("express")
const tripRouter = express.Router()

tripRouter.get("/", (req, res) => {
    res.json({ message: "Get all trips"});
})

tripRouter.post("/", (req, res) => {
    res.json({ message: "Add a new trip"});
})

tripRouter.get("/:tripId", (req, res) => {
    res.json({ message: "Get one trip"});
})

tripRouter.delete("/:tripId"), (req, res) => {
    res.json({ message: "Delete an existing trip"});
}

tripRouter.patch("/", (req, res) => {
    res.json({ message: "Update an existing trip"});
})

module.exports = tripRouter