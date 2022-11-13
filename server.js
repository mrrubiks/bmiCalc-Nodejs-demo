const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => { console.log("Server listening on 3000"); });
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/bmiCalc.html');
});
app.get("/bmicalc", (req, res) => {
    res.sendFile(__dirname + '/bmiCalc.html');
});
app.post("/bmicalc", (req, res) => {
    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    res.send(`Your BMI is ${weight / Math.pow(height, 2)}`);
});