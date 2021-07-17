const express = require('express');
const cors = require("cors");
const appRoute = require("./routes/appRoute");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

appRoute(app);

app.get('/', (req, res) => res.send('Take-Blip API'));
app.listen(PORT, () => console.log('Running API'));