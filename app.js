import { elBox, elMathProblem } from "./html-elements.js";

function random(point = 1) {
    return Math.trunc(Math.random() * point);


}

function results(result) {
    const array = [];

    while(true) {
        if(array.length === 16) {
            break;
        } else {
            array.push(random(100));
        }
    }
    const randomIndex = random(array.length)

    array[randomIndex] = result;

    return array;
}


function changeAction() {

let expression = ["+", "-", "*", "/"];
 let randomIndex = random(expression.length);

let a = random(10);
let b = random(10);

const sign = expression[randomIndex];

if(sign === "/") {
    while (a < b || a % b !== 0) {
        a = random(10);
        b = random(10);
    }
}
const display = `${a} ${expression[randomIndex]} ${b} `
const result = eval(display);
return {display, result};

};


    function ui (results, display) {
        elMathProblem.innerText = display;
        results.forEach(element => {
            const span = document.createElement("span");
            span.innerText = element;
            elBox.appendChild(span);

        });
    }
  
        const {display, result} = changeAction();

ui(results(result), display)

   








