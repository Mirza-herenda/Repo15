function printManyTimes(str) 
{
"use strict";
const sentence=str + "is cool !";

for (let i=0;i <str.length;i=i+2)//5
{
    console.log(sentence);
    console.log(i);
}
return sentence;
}
 printManyTimes("Arena ");