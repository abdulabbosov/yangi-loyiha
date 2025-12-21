import { elBox, elMathProblem } from "./html-elements.js";


function random(point = 1) {
    return Math.trunc(Math.random() * point);
}


function generateGrid(correctResult) {
    const array = [];   

    while (array.length < 16) {
        array.push(random(100));
    }

   
    const randomIndex = random(array.length);
    array[randomIndex] = correctResult;

    return array;
}


function changeAction() {
    const operators = ["+", "-", "*", "/"];
    const randomIndex = random(operators.length);

    let a = random(10);
    let b = random(10);
    const sign = operators[randomIndex];

 
    if (sign === "/") {
        while (b === 0 || a % b !== 0) {
            a = random(10);
            b = random(10);
        }
    }

    const display = `${a} ${sign} ${b}`;
    const result = eval(display); 
    return { display, result };
}


function ui(grid, display) {
    elMathProblem.innerText = display;
    elBox.innerHTML = "";

    grid.forEach(num => {
        const span = document.createElement("span");
        span.classList.add("span");
        span.innerText = num;
        elBox.appendChild(span);
    });
}


let { display, result } = changeAction();
ui(generateGrid(result), display);


elBox.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("span")) {
        if (Number(evt.target.innerText) === result) {
            evt.target.innerText = "✅";
            setTimeout(() => {
                ({ display, result } = changeAction());
                ui(generateGrid(result), display);
            }, 500);
        } else {
            evt.target.innerText = "❌";
            setTimeout(() => {
                evt.target.innerText = random(100);
            }, 500);
        }
    }
});
