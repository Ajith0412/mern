const express = require("express");
require('dotenv').config()
const mongoose = require('mongoose')
const app = express();
const taskRoutes = require("./routes/taskRoute")

const cors = require("cors")


//midleware

app.use((req, res, next) => {
    console.log("path " + req.path + "method" + req.method);
    next();
})

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//     res.send("Hello Wsorld 4000")
// })

// Database

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`DB is connected sucessfully and Server is running on port ${process.env.PORT}`)
    })
}).catch((error) => console.log(error));


app.use("/api/tasks", taskRoutes);


