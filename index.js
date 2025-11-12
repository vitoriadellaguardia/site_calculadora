let inputVal = "";
let arrayValuesDisplay = [];
let arrayValuesCalculate = [];
let ans = 0;
let memory = 0;
let isDegMode = true; // true = DEG, false = RAD

function insert(inputVal) {
    // Helper function for inserting values
}

function insertResult(result) {
    document.querySelector("#result").innerHTML = "=";
    document.querySelector("#result").insertAdjacentHTML("beforeend", `${result}`);
}

// Factorial function
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
        if (result === Infinity) return Infinity;
    }
    return result;
}

// Random number generator
function randomNumber() {
    return Math.random();
}

// Degree/Radian conversion
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

// Toggle DEG/RAD mode
document.querySelector("#degRad-btn").addEventListener('click', (e) => {
    isDegMode = !isDegMode;
    document.querySelector("#degRad").innerText = isDegMode ? "DEG" : "RAD";
});

document.querySelector("#buttons").addEventListener('click', (e) => {
    console.log(e.target.classList);
    
    // Numbers
    if (e.target.classList[1] === 'btn-num') {
        arrayValuesCalculate.push(e.target.innerText * 1);
        arrayValuesDisplay.push(e.target.innerText * 1);
    }

    // Decimal point
    if (e.target.classList[1] === "btn-dot") {
        arrayValuesCalculate.push('.');
        arrayValuesDisplay.push('.');
    }

    // Check if EXP mode activate
    checkEXPMode(e);

    // Special functions
    if (e.target.classList[1] === 'btn-special') {
        
        // Trigonometric functions
        if (e.target.classList[2] === 'btn-alg') {
            let func = e.target.classList[3];
            arrayValuesDisplay.push(e.target.innerText);
            
            if (func === 'sin' || func === 'cos' || func === 'tan') {
                if (isDegMode) {
                    arrayValuesCalculate.push(`Math.${func}(toRadians(`);
                } else {
                    arrayValuesCalculate.push(`Math.${func}(`);
                }
                arrayValuesCalculate.push('(');
                arrayValuesDisplay.push('(');
            } else if (func === 'asin' || func === 'acos' || func === 'atan') {
                if (isDegMode) {
                    arrayValuesCalculate.push(`toDegrees(Math.${func}(`);
                } else {
                    arrayValuesCalculate.push(`Math.${func}(`);
                }
                arrayValuesCalculate.push('(');
                arrayValuesDisplay.push('(');
            } else if (func === 'log') {
                arrayValuesCalculate.push('Math.log(');
                arrayValuesCalculate.push('(');
                arrayValuesDisplay.push('(');
            } else if (func === 'log10') {
                arrayValuesCalculate.push('Math.log10(');
                arrayValuesCalculate.push('(');
                arrayValuesDisplay.push('(');
            }
        }
        
        // Basic operations
        else if (e.target.classList[2] === 'btn-mult') {
            arrayValuesCalculate.push('*');
            arrayValuesDisplay.push('×');
        } else if (e.target.classList[2] === 'btn-div') {
            arrayValuesCalculate.push('/');
            arrayValuesDisplay.push('/');
        } else if (e.target.classList[2] === 'btn-plus') {
            arrayValuesCalculate.push('+');
            arrayValuesDisplay.push('+');
        } else if (e.target.classList[2] === 'btn-minus') {
            arrayValuesCalculate.push('-');
            arrayValuesDisplay.push('−');
        }
        
        // Square root functions
        else if (e.target.classList[2] === 'btn-sqrt') {
            arrayValuesCalculate.push('Math.sqrt(');
            arrayValuesDisplay.push('√(');
        } else if (e.target.classList[2] === 'btn-root3') {
            arrayValuesCalculate.push('Math.cbrt(');
            arrayValuesDisplay.push('∛(');
        } else if (e.target.classList[2] === 'btn-root-y') {
            arrayValuesCalculate.push('Math.pow(');
            arrayValuesDisplay.push('ʸ√(');
        }
        
        // Power functions
        else if (e.target.classList[2] === 'btn-exp2') {
            arrayValuesCalculate.push('**(2)');
            arrayValuesDisplay.push('²');
        } else if (e.target.classList[2] === 'btn-exp3') {
            arrayValuesCalculate.push('**(3)');
            arrayValuesDisplay.push('³');
        } else if (e.target.classList[2] === 'btn-pow') {
            arrayValuesCalculate.push('**');
            arrayValuesDisplay.push('^');
        } else if (e.target.classList[2] === 'btn-exp-e') {
            arrayValuesCalculate.push('Math.exp(');
            arrayValuesDisplay.push('e^(');
        } else if (e.target.classList[2] === 'btn-exp-10') {
            arrayValuesCalculate.push('Math.pow(10,');
            arrayValuesDisplay.push('10^(');
        }
        
        // Constants
        else if (e.target.classList[2] === 'btn-PI') {
            arrayValuesCalculate.push('Math.PI');
            arrayValuesDisplay.push('π');
        } else if (e.target.classList[2] === 'btn-E') {
            arrayValuesCalculate.push('Math.E');
            arrayValuesDisplay.push('e');
        }
        
        // Other functions
        else if (e.target.classList[2] === 'btn-exp1') {
            arrayValuesCalculate.push('**(-1)');
            arrayValuesDisplay.push('⁻¹');
        } else if (e.target.classList[2] === 'btn-%') {
            arrayValuesCalculate.push('/100');
            arrayValuesDisplay.push('%');
        } else if (e.target.classList[2] === 'btn-fact') {
            arrayValuesCalculate.push('factorial(');
            arrayValuesDisplay.push('!(');
        } else if (e.target.classList[2] === 'btn-sign') {
            changeSign();
        } else if (e.target.classList[2] === 'btn-rnd') {
            arrayValuesCalculate.push('randomNumber()');
            arrayValuesDisplay.push('RND');
        }
        
        // Memory functions
        else if (e.target.classList[2] === 'btn-mem-plus') {
            if (arrayValuesCalculate.length > 0) {
                let expr = arrayValuesCalculate.join('');
                try {
                    memory += eval(expr);
                } catch (e) {
                    console.log('Memory error');
                }
            }
        } else if (e.target.classList[2] === 'btn-mem-minus') {
            if (arrayValuesCalculate.length > 0) {
                let expr = arrayValuesCalculate.join('');
                try {
                    memory -= eval(expr);
                } catch (e) {
                    console.log('Memory error');
                }
            }
        } else if (e.target.classList[2] === 'btn-mem-recall') {
            arrayValuesCalculate.push(memory);
            arrayValuesDisplay.push('MR');
        }
        
        // Answer function
        else if (e.target.classList[2] === 'btn-Ans') {
            arrayValuesCalculate.push(ans);
            arrayValuesDisplay.push('Ans');
        }
        
        // Parentheses
        else if (e.target.innerText === '(') {
            arrayValuesCalculate.push('(');
            arrayValuesDisplay.push('(');
        } else if (e.target.innerText === ')') {
            arrayValuesCalculate.push(')');
            arrayValuesDisplay.push(')');
        }
    }

    // EXP function
    if (e.target.classList[2] === 'btn-EXP') {
        arrayValuesCalculate.push('*10**(');
        arrayValuesDisplay.push("×10^(");
        modeOnlyDigitKey = 1;
    }

    updateDisplay();
});

let modeOnlyDigitKey = 0;
function checkEXPMode(e) {
    if ((e.target.classList[1] !== 'btn-num' &&
         e.target.classList[1] !== 'btn-dot' &&
         e.target.classList[1] !== 'btn-del') &&
         e.target.classList[2] !== 'btn-sign') {
        if (modeOnlyDigitKey === 1) {
            arrayValuesCalculate.push(')');
            arrayValuesDisplay.push(")");
            modeOnlyDigitKey = 0;
        }
    }
}

function updateDisplay() {
    document.querySelector("#display").innerHTML = arrayValuesDisplay.join('');
}

// Keyboard support
const availableChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '/', '-', '(', ')', '^'];
window.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === "Escape") {
        document.querySelector("#btn-AC").click();
    } else if (e.key === "Enter") {
        document.querySelector("#btn-equal").click();
    } else if (e.key === 'Backspace') {
        document.querySelector("#Del").click();
    } else if (e.key === '*') {
        document.querySelector('.btn-mult').click();
    } else if (availableChars.indexOf(e.key) > -1) {
        if (availableChars.indexOf(e.key) <= 9) {
            arrayValuesCalculate.push(e.key * 1);
            arrayValuesDisplay.push(e.key * 1);
        } else {
            arrayValuesCalculate.push(e.key);
            arrayValuesDisplay.push(e.key);
        }
    }
    updateDisplay();
});

// Clear display button
document.querySelector("#btn-AC").addEventListener('click', (e) => {
    arrayValuesCalculate = [];
    arrayValuesDisplay = [];
    inputVal = "";
    result = 0;
    document.querySelector("#display").innerHTML = "";
    document.querySelector("#result").innerHTML = "=";
});

// Clear history memory
document.querySelector("#clearAll").addEventListener('click', (e) => {
    document.querySelector("#historial").innerText = "";
    clearHistory();
});

// Backspace button functionality
document.querySelector("#Del").addEventListener('click', (e) => {
    if (arrayValuesDisplay[arrayValuesDisplay.length - 1] === ')') {
        arrayValuesCalculate.pop();
        arrayValuesDisplay.pop();
        modeOnlyDigitKey = 1;
    }
    if (arrayValuesDisplay[arrayValuesDisplay.length - 1] === '×10^(') {
        modeOnlyDigitKey = 0;
    }

    arrayValuesCalculate.pop();
    arrayValuesDisplay.pop();
    updateDisplay();
});

let expression = "";
let result = 0;
let found = "";

document.querySelector("#btn-equal").addEventListener('click', (e) => {
    checkEXPMode(e);
    expression = arrayValuesCalculate.join('');
    
    console.log(expression);
    
    // Fix implicit multiplication
    found = expression.match(/\d+(?=\()|d+(?=M)/g);
    if (found) {
        expression = expression.replace(/\d+(?=\()|d+(?=M)/g, `(${found})*`);
    }
    expression = expression.replace(/\)(?=\d+)/g, ")*");
    expression = expression.replace(/\)\(/g, ")*(");
    
    expression = countParenthesesAndFix(expression);
    expression = expression.replace(/\s/g, '');
    
    console.log(expression);

    calculate(expression);
    insertResult(result);
    saveToHistorial();
});

function calculate(expression) {
    try {
        // Add helper functions to global scope for eval
        window.factorial = factorial;
        window.randomNumber = randomNumber;
        window.toRadians = toRadians;
        window.toDegrees = toDegrees;
        
        result = eval(expression);
        ans = result;
        return result;
    } catch (err) {
        result = "Error";
        return result;
    }
}

// History functions
let expHistoryArray = [];
let resHistoryArray = [];
let arrayValuesCalculateHistory = [];
let arrayValuesDisplayHistory = [];
let countHistory = 0;
let historyString = "";

function saveToHistorial() {
    let equation = arrayValuesDisplay.join('');
    let resultH = result;
       
    if (resultH !== "Error" && resultH !== "undefined" && resultH !== "NaN" && resultH !== undefined) {
        document.querySelector("#historial").insertAdjacentHTML("afterbegin", 
            `<section class='hist ${countHistory}'> ${countHistory+1}) ${equation} = ${resultH} </section>`);

        historyString = JSON.stringify(arrayValuesDisplay);
        arrayValuesDisplayHistory.push(historyString);
        arrayValuesCalculateHistory.push(JSON.stringify(arrayValuesCalculate));

        expHistoryArray.push(equation);
        resHistoryArray.push(resultH);
        countHistory++;
    }
}

function clearHistory() {
    countHistory = 0; 
    expHistoryArray = [];
    resHistoryArray = [];
}

// Return previous equation or result
document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.classList[0] === 'hist') {
        let historyValue = e.target.classList[1] * 1;
        let memResult = resHistoryArray[historyValue];
        let memExpr = JSON.parse(arrayValuesDisplayHistory[historyValue]);
        let memEval = JSON.parse(arrayValuesCalculateHistory[historyValue]);

        arrayValuesCalculate = memEval;
        insertResult(memResult);
        document.querySelector("#display").innerHTML = "";
        arrayValuesDisplay = memExpr;
        updateDisplay();
    }
});

// Change sign functionality
function changeSign() {
    let index = arrayValuesCalculate.length - 1;
    
    while ((arrayValuesCalculate[index] === '.') || (typeof (arrayValuesCalculate[index]) === "number")) {
        index--;
    }
    
    if (arrayValuesCalculate[index] !== '-' && arrayValuesCalculate[index] !== '+') {
        arrayValuesCalculate.splice(index + 1, 0, '-');
        arrayValuesDisplay.splice(index + 1, 0, '-');
    } else if (arrayValuesCalculate[index] === '-') {
        arrayValuesCalculate[index] = '+';
        arrayValuesDisplay[index] = '+';
    } else if (arrayValuesCalculate[index] === '+') {
        arrayValuesCalculate[index] = '-';
        arrayValuesDisplay[index] = '-';
    }
    
    updateDisplay();
}

function countParenthesesAndFix(expression) {
    if (expression.match(/\(/g)) {
        let parenthesescount = 0;
        if (expression.match(/\)/g)) {
            parenthesescount = expression.match(/\(/g).length - expression.match(/\)/g).length;
        } else {
            parenthesescount = expression.match(/\(/g).length;
        }

        while (parenthesescount > 0) {
            expression = expression.concat(')');
            parenthesescount = expression.match(/\(/g).length - expression.match(/\)/g).length;
        }
    }
    return expression;
}