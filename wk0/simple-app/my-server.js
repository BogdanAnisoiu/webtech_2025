// import express from 'express'
const express = require('express')

const app = express()
app.use(express.static('public'));
//app.get('/hello', (req, res) => {
  //res.send('hello world!')
//})

const PORT = 8080;
app.listen(PORT, () => console.log(`Merge pe http://localhost:${PORT}`));