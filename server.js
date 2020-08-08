'use strict';
const express = require('express');
const agent = require('superagent');
const server = express();
const PORT = 3000;

server.get('/',(req,res)=>{
    agent.get('192.168.1.20:8000').then(data=>{
        res.send(data)
    })
})

server.listen(PORT,()=>{
    console.log('i am listining to port: ',PORT);
})