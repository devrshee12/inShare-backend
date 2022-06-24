const express = require("express") 
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");

connectDB();

//cors 

const corsOptions = {
    // origin: process.env.ALLOWED_CLIENTS.split(',')
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204

}
// console.log(corsOptions.origin);

app.use(cors(corsOptions));




app.use(express.static("public"));
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "ejs");

//routes
app.use("/api/files", require("./routes/files"));       
app.use("/files", require("./routes/show"))
app.use("/files/download", require("./routes/download"));




app.listen(PORT, () => {
    console.log(`listening on port number ${PORT}`);
})