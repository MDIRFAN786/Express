const http = require('http');
const express = require('express');
const app = express();

app.use('/product', (req,res,next)=>{
    console.log('product');
    res.send('prodecut');
} ) 


app.use( '/',(req,res,next)=>{
    console.log('this is middleware');
    next();//by this middle ware went to next
} )


const server = http.createServer(app);

server.listen(3000);