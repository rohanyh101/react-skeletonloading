// import express from 'express';
const express = require("express");
const {videos, user } = require("./fakeData");
const port = 5000;

const app = express();
app.use(express.json());

// these are called endpoints...
// disp in application...
app.get('/', (req, res) => {
    setTimeout(() => {
        res.send("Server is ready");
    }, 0);
});

app.get('/api/user/1', (req, res) => {
    setTimeout(() => {
        res.json(user)
    }, 3000)
});

app.get('/api/videos/1', (req, res) => {
    setTimeout(() => {
        res.json(videos)
    }, 5000)
});

// disp in the terminal...
app.listen(port, () => console.log("Server is listening on port " + `${port}`));