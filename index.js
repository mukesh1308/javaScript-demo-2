let global=10;
function num(){
    var local=5;
}
//! console.log(global);
//! console.log(local);

var outWer="T-shirt";
function myOutFiit(){
    var outWer="sweater";
    return outWer;
}
//! console.log(myOutFiit());
//! console.log(outWer);

function addFive(num){
    return num+5;
}
//! console.log(addFive(10));

function divTwo(num){
    return num/2;
}
//! console.log(divTwo(20));

function sum(num1,num2){
    return num1+num2;
}
var result=sum(10,15);
//! console.log(result);


// QUEUE

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var arr=[1,2,3,4,5];
//! console.log("before :"+JSON.stringify(arr));
//! console.log(nextInLine(arr,6));
//! console.log("after :"+JSON.stringify(arr));

function isGrater(num1,num2){
    if(num1>num2){
        return true;
    }
    else{
        return false;
    }
}

var a=5;
var b=10;
//! console.log(isGrater(a,b));