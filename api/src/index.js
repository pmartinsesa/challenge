const PORT = process.env.PORT || 4000;

const express = require('express');
const cors = require("cors");
const appRoute = require("./routes/appRoute");

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET');
  
//     next();
// });

appRoute(app);

app.get('/', (req, res) => res.send('Take-Blip API'));
app.listen(PORT, () => console.log('Running API'));