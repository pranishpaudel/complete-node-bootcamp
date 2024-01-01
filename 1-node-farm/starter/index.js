
import {readFileSync, writeFileSync} from 'fs';


const textin= readFileSync('/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/input.txt','utf-8');


console.log(textin);


const textOut = `This is what we know about the avocado ${textin}.\nCreated on ${Date.now()}`;

console.log(textOut);


writeFileSync('/Users/air/Desktop/JavascriptNode/complete-node-bootcamp/1-node-farm/starter/txt/output.txt',textOut);