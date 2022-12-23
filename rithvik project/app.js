const express = require('express');
const bodyparser = require('body-parser');
const app = express()

app.use(bodyparser.urlencoded({extended:true}));

app.get('',(req,res)=>{
    res.sendFile(__dirname + "/from.html");
})




app.post('/msg',(req,res)=>{
    const Tshirt = Number(req.body.Tshirt);
    const jacket = Number(req.body.jacket);
    const cap = Number(req.body.cap);
    const notebook = Number(req.body.notebook);
    const pens = Number(req.body.pens);
    const marker = Number(req.body.marker);

    var purchase = [];
    purchase.push(Tshirt);purchase.push(jacket);purchase.push(cap);purchase.push(notebook);purchase.push(pens);purchase.push(marker);
    // for(let i=0;i<=5;i++)
    //     console.log(purchase[i]);
    var price = [1000,2000,500,200,300,500];
    var discount = [.1,.05,.2,.2,.1,.05];
    var ans = [0,0,0,0,0,0];
    
    for(let i=0;i<6;i++){
        if(i<=2){
            if(purchase[i]>2){
                ans[i]=-1;
                purchase[i]=0;
            }
        }
        else{
            if(purchase[i]>3){
                ans[i]=-1;
                purchase[i]=0;
            }
        }
    }
    let three=0;

    var total = 0;
    for(let i=0;i<6;i++)
        total+=purchase[i]*price[i];
    if(total>=3000)three=1;
    var dis=0;
    if(total>=1000)
        for(let i=0;i<6;i++)
            dis +=purchase[i]*price[i]*discount[i];
    total-=dis;
    console.log(total);
    if(three){dis+=total*0.05;total-=total*.05;}
    var s = "";

    for(let i=0;i<6;i++)
        if(ans[i]==-1)purchase[i]=-1;
    for(let i=0;i<6;i++)
        if(purchase[i]>0)s+="add <br/>";
        else if(purchase[i]==-1)s+="error <br/>";
    // res.write('<html>');
    // res.write('<body> <h1> is it working {total}</h1></body>');
    // res.write('</html>');    
    console.log(s);
    
     res.send(s+'Total_discount:' + dis + '<br/> Amount to pay:'+total);
     })

    app.listen(9099,(res)=>{
        //console.log("3000");
    })




    // const product = [
    //     {
    //       type : "clothing",
    //       TShirt:Tshirt,
    //       amount:1000,
    //       discount:10
    //     },
    //     {
    //         type : "clothing",
    //         Jacket:jacket,
    //         amount:2000,
    //         discount:5
    //     },
    //     {
    //         type : "clothing",
    //         Cap:cap,
    //         amount:500,
    //         discount:20
    //     },
    //     {
    //         type : "stationery",
    //         Notebook:notebook,
    //         amount:200,
    //         discount:20
    //     },
    //     {
    //         type : "stationery",
    //         Pens:pens,
    //         amount:300,
    //         discount:10
    //     },
    //     {
    //         type : "stationery",
    //         Marker:marker,
    //         amount:500,
    //         discount:5
    //     }    
    //   ];
