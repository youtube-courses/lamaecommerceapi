const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");

require('dotenv').config()
dbUR = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/demo`;
mongoose.connect(dbUR)
        .then( ()=>console.log("Db Connection Successfully!") )
        .catch((err) => {
            console.log(err)
        })
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);  
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

const port = process.env.PORT || 5000
app.listen(port , () => {
    console.log(`Backend server in running in port: ${port}!`);
})