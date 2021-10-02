const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require("./routes/user");

require('dotenv').config()
dbUR = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/demo`;
mongoose.connect(dbUR)
        .then( ()=>console.log("Db Connection Successfully!") )
        .catch((err) => {
            console.log(err)
        })
app.use(express.json()) 
app.use("/api/users", userRoute);      

const port = process.env.PORT || 5000
app.listen(port , () => {
    console.log(`Backend server in running in port: ${port}!`);
})