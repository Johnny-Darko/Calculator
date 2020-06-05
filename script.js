const input = document.querySelector("input");
const answerDisplay = document.querySelector("#answerDisplay");
const operationDisplay = document.querySelector("#operationDisplay");
let answer;
let lastOp = 0;
const style = document.querySelector("#style");
const styleSwitch = document.querySelector("#styleSwitch");

const possible = [
    //keycodes of all the allowed characters
    "8",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "96",
    "97",
    "98",
    "99",
    "100",
    "101",
    "102",
    "103",
    "104",
    "105",
    "106",
    "107",
    "109",
    "110",
    "111",
    "189",
    "190",

];

input.addEventListener("keydown", function(event){
    if(event.keyCode === 13) {
        calculate();
    } 
});

input.addEventListener("keyup", function(){
    // debugger
    for(i = 0; i < possible.length; i++){
        if(possible.includes("" + event.keyCode) === false){
            input.value = "";
        }
    }
});

styleSwitch.addEventListener("click", function(){
    if(styleSwitch.textContent === "Classic Style"){
        style.setAttribute("href", "style.css");
        styleSwitch.textContent = "Modern Style";
    } else{
        style.setAttribute("href", "style_round.css");
        styleSwitch.textContent = "Classic Style";
    }
});


//setup Buttons
const one = document.getElementById("1").addEventListener("click", function(){
    input.value += "1";
});
const two = document.getElementById("2").addEventListener("click", function(){
    input.value += "2";
});
const three = document.getElementById("3").addEventListener("click", function(){
    input.value += "3";
});
const four = document.getElementById("4").addEventListener("click", function(){
    input.value += "4";
});
const five = document.getElementById("5").addEventListener("click", function(){
    input.value += "5";
});
const six = document.getElementById("6").addEventListener("click", function(){
    input.value += "6";
});
const seven = document.getElementById("7").addEventListener("click", function(){
    input.value += "7";
});
const eight = document.getElementById("8").addEventListener("click", function(){
    input.value += "8";
});
const nine = document.getElementById("9").addEventListener("click", function(){
    input.value += "9";
});
const zero = document.getElementById("0").addEventListener("click", function(){
    input.value += "0";
});
const point = document.getElementById("point").addEventListener("click", function(){
    input.value += ".";
});
// var negative = document.getElementById("negative").addEventListener("click", function(){
//     if(input.value !== ""){
//         if(input.value.substring(0,1) !== "-"){
//             input.value = "-" + input.value;
//         } else{
//             input.value = input.value.substring(1);
//         }
//     }   
// });
const plus = document.getElementById("plus").addEventListener("click", function(){
    input.value += "+";
});
const minus = document.getElementById("minus").addEventListener("click", function(){
    input.value += "-";
});
const times = document.getElementById("times").addEventListener("click", function(){
    input.value += "*";
});
const devide = document.getElementById("devide").addEventListener("click", function(){
    input.value += "/";
});
const equal = document.getElementById("equal").addEventListener("click", calculate);

const ce = document.getElementById("ce").addEventListener("click", function(){
    input.value = "";
});
const c = document.getElementById("c").addEventListener("click", function(){
    input.value = "";
    answerDisplay.textContent = "0";
    operationDisplay.textContent = "0";
});
const back = document.getElementById("back").addEventListener("click", function(){
    input.value = input.value.substr(0, input.value.length-1);
});


function calculate(){
    //calculating the input with the existing answer
    if(input.value.substring(0,1) === "+"){ 
        answer = Number(answerDisplay.textContent) + eval(input.value);
    } else if(input.value.substring(0,1) === "-"){
        answer = Number(answerDisplay.textContent) + eval(input.value);
    } else if(input.value.substring(0,1) === "*"){
        answer = Number(answerDisplay.textContent) * eval(input.value.substring(1));
    } else if(input.value.substring(0,1) === "/"){
        if(answerDisplay.textContent === "0"){
            answer = "SYNTAX ERROR"
        } else{
            answer = Number(answerDisplay.textContent) / eval(input.value.substring(1));
        }
    } else if(input.value.indexOf("0/") == !-1){ 
        answer = "SYNTAX ERROR";
    } else if(input.value === ""){
        for(var i = operationDisplay.textContent.length; i >= 0; i--){
            //find positon in string of last operator (+,-,*,/)
            if(operationDisplay.textContent.substring(i, i+1) === "+" || operationDisplay.textContent.substring(i, i+1) === "-" || operationDisplay.textContent.substring(i, i+1) === "*" || operationDisplay.textContent.substring(i, i+1) === "/"){
                //define last Operation in operationline 
                lastOp = operationDisplay.textContent.substring(i, operationDisplay.textContent.length);
                i = -1;
            }
        }
        operationDisplay.textContent = lastOp;
        answer = eval(answerDisplay.textContent + lastOp);
        lastOp = 0;
    }
     else{
        answer = eval(input.value);
    }
    answerDisplay.textContent = answer;
    // just change NaN into ERROR
    if(answerDisplay.textContent === "NaN"){
        answerDisplay.textContent = "SYNTAX ERROR";
    }
    //display operation in operation-line
    if(input.value !== ""){
        operationDisplay.textContent = input.value;
    }
    
    //clear the input
    input.value = "";  
}
