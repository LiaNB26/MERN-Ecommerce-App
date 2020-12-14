const express = require("express");

const productsRoutes = require("./routes/products-routes");

const app = express();

app.use("/api/products", productsRoutes);

app.listen(5000, console.log("Server running on port 5000"));
