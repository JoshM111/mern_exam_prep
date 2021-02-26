// require("dotenv").config;

const express = require('express');
const app = express();
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const port = 8000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000"
//     // ^react server
// }));
// app.use(cookieParser());

require('./config/mongoose.config'); 
// require('./config/mongoose.config')(process.env.DB_NAME);
require('./routes/skiffs.route')(app);




app.listen(port, () => console.log(`Listening on port: ${port}`));
