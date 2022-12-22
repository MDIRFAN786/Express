
//untill writeFileSysnc is not exicute it will not let run any other code



// // const fs = require('fs');
// // fs.writeFileSync('hellow.txt','this is my first file system');

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.headers);

//     let url = req.url;
//     let method = req.method;
//     if(url==='/'){
//         res.write('<html>');
//         res.write('<head><title>enter</title></head>');
//         res.write('<form method="POST" action="/message"><input type="text" name="meg"></input><button type="submit">Sumit</button></form>');
//         res.write('</html>');
//         return res.end();
//     }

//     if(url ==='/message' && method==='POST'){
//         const body = []
//         req.on('data',(chunk)=>{
//             body.push(chunk);
//             console.log(chunk);
//         });
//         return req.on('end',()=>{
//             const parserBody = Buffer.concat(body).toString();
//             const message = parserBody.split('=')[1];
//             fs.writeFileSync('message.txt',message);
//             res.statusCode = 302;//this is for relocation
//             res.setHeader('Location','/');
//             return res.end();
//         });
        
//     }


//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><h1>Jai hind dosto</h1><head>');
//     res.write('<body><h2> hi my friend</h2></body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(3000);







// const fs = require('fs');
// fs.writeFileSync('hellow.txt','this is my first file system');

const http = require('http');
const routes = require('./routes');
console.log(routes.someText);
const server = http.createServer(routes.handler);
server.listen(3000);



























































