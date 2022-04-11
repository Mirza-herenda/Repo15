
let myName;
let message;

myName="Padawans";
function myMsng(name) {
   "use strict";
   message="Hello, "+ name + "!"; 
   return message;
}
console.log(myMsng(myName));
module.exports=myMsng;
