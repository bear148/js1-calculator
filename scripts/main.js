let numbers = ""; // init variables for actually building the equation
let operation = "";

// clears the calculator screen
function clear() {
    numbers = "";
    operation = "";
    document.getElementById("ans").innerHTML = "&nbsp";
}

// building string of numbers.
// everytime the function is called the number pressed is added onto the string.
function build(a) {
    numbers += a;
    document.getElementById("ans").innerText = "" + numbers;
}

// adds the operation to the equation.
// the if statement is to check if numbers is empty. This is because you can have nothing then an operator because it wont ouput anything
function op(o) {
    operation = o;
    if(numbers != "") {
        numbers += o;
        document.getElementById("ans").innerText = "" + numbers;
    } else {
        alert("Invalid Equation! No numbers selected!");
        return;
    }
}

// this function solves the equation.
function solve() {
    // first we check if there have been any numbers inputted, if no it creates an alert and returns out of the function
    if (numbers == "") {
        alert("Invalid Equation! No numbers inputted");
        return;
    }

    // second we check if there was an operation selected. this is because there must be an operation to have an equation or else it is just a number.
    if (operation == "" || operation == null) {
        alert("Invalid Equation! No Operation selected!");
        return;
    }

    // here we split the numbers array at the operation, this will turn it into two string each being the numbers in the equation
    // e.g ["78+97"] -> ["78", "97"]
    let n_s = numbers.split(operation);
    let answer;

    // Checking if the same operation has been pressed multiple times
    if (n_s[1] == "") {
        alert("Invalid Equation! Too many operations!");
        return;
    }

    // This is a check for if a second number has been inputted. If not the calculation can not continue.
    // e.g of invalid equation "9*"
    if (!n_s[1]) {
        alert("Invalid Equation! No second number inputted after operation!");
        return;
    }

    // next we go through each case of operator and execute the correct mathematical operation.
    // the answer is assigned to the answer variable defined above.
    switch(operation) {
        case "+":
            answer = parseFloat(n_s[0]) + parseFloat(n_s[1]);
            break;
        case "-":
            answer = parseFloat(n_s[0]) - parseFloat(n_s[1]);
            break;
        case "*":
            answer = parseFloat(n_s[0]) * parseFloat(n_s[1]);
            break;
        case "/":
            answer = parseFloat(n_s[0]) / parseFloat(n_s[1]);
            break;
    }

    // finally we set the answer text on the website to the calculated answer. We do not need to reset the answer variable because it is reset everytime the function is ran.
    // this is a last resort check to see if there are any errors regarding the final answer not being a number. if the answer is not a number, SYNTAX ERROR is outputted to the calculator screen.
    if (isNaN(answer)) {
        document.getElementById("ans").innerText = `SYNTAX ERROR`;
    } else {
        document.getElementById("ans").innerText = `${n_s[0]}${operation}${n_s[1]}=${answer}`;
    }

    // these reset the numbers and operation for the next calculation
    numbers = "";
    operation = "";
}