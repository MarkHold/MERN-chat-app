const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    //root route http://localhost:5000/
    res.send("Hello Worldz!!!");
});

app.listen(5000, () => console.log("Server running on port 5000"));