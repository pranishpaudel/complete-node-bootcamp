
import { readFileSync, writeFileSync } from 'fs';
import { readFile, writeFile } from 'fs';

import {createServer} from 'http';



/////Blocking synchronous code
// const textin= readFileSync('/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/input.txt','utf-8');


// console.log(textin);


// const textOut = `This is what we know about the avocado ${textin}.\nCreated on ${Date.now()}`;

// console.log("File written");


// writeFileSync('/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/output.txt',textOut);




/////NOON BLOCKING ASYNC///

// readFile('/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/start.txt', 'utf-8', (err, data1) => {

//     if (err){
//         return console.log("We have some error");
//     }

//     readFile(`/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {

//         console.log(data2);
//         readFile(`/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/append.txt`, 'utf-8', (err, data3) => {

//             writeFile(`/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/final1.txt`, `${data2}\n${data3}`,(err) => {

//                 console.log("Your files have been written");
//             });
//         });
//     });
// });
// console.log('Will read data');




///servver
const data=  readFileSync(`complete-node-bootcamp/1-node-farm/starter/dev-data/data.json`,'utf-8');
    const productData= JSON.parse(data);

const server= createServer((req,res) => {

    const pathname= req.url;
    if (pathname==="/overview" || pathname==='/'){
        res.end('This is the overview of the project')
    }
    else if(pathname==="/product"){
        res.end("this is the product page");
    }
    else if (pathname=='/api'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(data);
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found')
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to Port 8000");
});