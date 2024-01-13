require('dotenv').config();

const express = require('express');
const usersRouter = require('./routes/usersRoutes');
const https = require("https");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 443;

app.use(express.json());
app.use('/users', usersRouter);

https
  .createServer(
    {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
      },app)
  .listen(port, ()=>{
    console.log(`server is runing at port ${port}`)
  });
