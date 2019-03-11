const path = require('path');
const bodyParser  = require('body-parser');
const express = require('express');
const PORT = 80; //remember to change this to 80 during build

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));


app.listen(PORT, () => {
    console.log("WEBSITE LISTENING ON 80...");
})