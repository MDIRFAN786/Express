const fs = require('fs');

const handler = (req,res)=>{
    let url = req.url;
    let method = req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>enter</title></head>');
        res.write('<form method="POST" action="/message">')
        res.write('<label>Tshirt</label><input type="number" min="0" max="1000" step="1"><br/></input><label>jacket</label><input type="number" min="0" max="1000" step="1"><br/></input><label>cap</label><input type="number" min="0" max="1000" step="1"><br/></input><label>notebook</label><input type="number" min="0" max="1000" step="1"><br/></input><label>pens</label><input type="number" min="0" max="1000" step="1"><br/></input><label>marker</label><input type="number" min="0" max="1000" step="1"><br/></input><button type="submit">Sumit</button>');
        res.write('</form>');
        res.write('</html>');
        return res.end();
    }

    if(url ==='/message' && method==='POST'){
        const body = []
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        });
        return req.on('end',()=>{
            const parserBody = Buffer.concat(body).toString();
            const message = parserBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode = 302;//this is for relocation
                res.setHeader('Location','/');
                return res.end();
            });
            
        });
        
    }


    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><h1>Jai hind dosto</h1><head>');
    res.write('<body><h2> hi my friend</h2></body>');
    res.write('</html>');
    res.end();
}
module.exports = {
    handler:handler,
    someText:'here it comes'
};