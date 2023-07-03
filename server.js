require('dotenv').config();
const express= require('express');
const app = express();
const bodyParser =  require("body-parser");
const connectDB = require('./config/dbConn');
const router = require("./routes");
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

connectDB();

app.use(bodyParser.urlencoded({extended: true }));  
app.use(express.json({ type: 'application/*+json' }));
app.use(bodyParser.json());
app.use(router);


app.listen(8000);

module.exports = app;