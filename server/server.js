const express = require("express");
const app = express();

// Correctly define the route and callback function
app.get("/", (req, res) => {
    res.status(200).send("Ram Ram Bhai");
});

const PORT = 9888;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
