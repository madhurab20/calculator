const display1El = document.querySelector(".container__display__display-1");
const display2El = document.querySelector(".container__display__display-2");
const tempResultEl = document.querySelector(".container__display__temp-result");
const numbersE1 = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllE1 = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = "";
let lastOperation = "";
let haveDot = false;

numbersE1.forEach((number) => {
  //for adding dot in the begninge of the entry for first operatoion
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

// event for display 2 take the temp values
operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num); // convert display 2 string to number
    }
    //clear ing display 2
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

// to clear the input given in display 2 and moving to display 1
function clearVar(name = "") {
  dis1Num += dis2Num + "" + name + "";
  display1El.innerText = dis1Num; // reinitializing the value of dis2 to the value the was in display 1 of html
  display2El.innerText = ""; // emptying the display 2
  dis2Num = "";
  tempResultEl.innerText = result; //after operation the temp_res will be stored in result
}

// for all math operations
function mathOperation() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(dis2Num); //for math operation
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

//if no input for operation
equalEl.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

//clearing all the elements
clearAllE1.addEventListener("click", (e) => {
  display1El.innerText = "0";
  display2El.innerText = "0";
  dis1Num = "";
  dis2Num = "";
  result = "";
  tempResultEl.innerText = "0";
});

//clearing last element
clearLastEl.addEventListener("click", (e) => {
  display2El.innerText = "0";
  tempResultEl.innerText = "0";
  dis2Num = "";
});
