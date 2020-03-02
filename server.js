const express = require("express");
const cors = require("cors")
const app = express();
const cartRoutes = require("./routes.js")
app.use(express.json());
app.use(cors())
app.use(cartRoutes)
const port = 8888;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});