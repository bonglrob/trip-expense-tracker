require("dotenv").config()
const express = require("express")
const tripRouter = require("./routes/tripRouter.js")
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use("/trips", tripRouter);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
})