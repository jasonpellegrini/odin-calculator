let displayArr = [];
let firstArr;
let secondArr;
let counter = 0;
let operatorStorage;
let newArr = [];

const add = function(arr) {
    let num1 = arr[0];
    let num2 = arr[1];
    console.log(arr);
	/*let sum = numArray.reduce((prev, current) => prev + current, 0);*/
    
    let sum = +num1 + +num2;
    console.log(sum);
    return sum; 
};

const subtract = function(arr) {
    let diff = arr[0];
	for(let i=1;i < arr.length; i++){
        diff -= arr[i];
    }
    console.log(diff);
    return diff;
};

const multiply = function(arr) {
  let r = 1;
  for(let x=0;x<arr.length;x++){
    let mult = arr[x];
    r=r*mult;
  }
  console.log(r);
  return r;
};

const divide = function(arr){
    let divide = arr[0];
	for(let i=1;i < arr.length; i++){
        divide /= arr[i];
    }
    console.log(divide);
    return divide;
}

const operate = function(operator, x, y){
    let answer;
    let arr = []
    arr.push(x);
    arr.push(y);

    if (operator == '+'){
        answer = add(arr);
    } else if (operator == '-'){
        answer = subtract(arr);
    } else if (operator == '*'){
        answer = multiply(arr);
    } else if(operator == '÷') {
        answer = divide(arr);
    }
    counter++;
    display.innerHTML = answer;
}

const updateDisplay = function(arr) {
    const display = document.querySelector('#displayNum');
    forOperators(arr);
    displayArr.push(arr);
    newArr = displayArr.join('');

    if (counter % 2 !== 0){
        displayArr.pop();
        secondArr = displayArr.join('')
        display.innerHTML = newArr;
        return;
    }
    
    display.innerHTML = newArr;
}

const forOperators = function(arr){
    if (arr[0] === "+" || arr[0] === "-" || arr[0] === "*" || arr[0] === "÷" && counter % 2 == 0){
        operatorStorage = arr[0];
        firstArr = displayArr.join('');
        counter++;
        displayArr = [];
    } else if (arr[0] === "+" || arr[0] === "-" || arr[0] === "*" || arr[0] === "÷" && counter % 2 !== 0){
        operatorStorage = arr[0];
        secondArr = displayArr.join('')
        counter++;
        displayArr = [];
    }
}

const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multBtn = document.getElementById('mult');
const divisionBtn = document.getElementById('division');
const enterBtn = document.getElementById('enter');

oneBtn.addEventListener("click", ()=> {
    updateDisplay([1]);
});
twoBtn.addEventListener("click", ()=> {
    updateDisplay([2]);
});
threeBtn.addEventListener("click", ()=> {
    updateDisplay([3]);
});
fourBtn.addEventListener("click", ()=> {
    updateDisplay([4]);
});
fiveBtn.addEventListener("click", ()=> {
    updateDisplay([5]);
});
sixBtn.addEventListener("click", ()=> {
    updateDisplay([6]);
});
sevenBtn.addEventListener("click", ()=> {
    updateDisplay([7]);
});
eightBtn.addEventListener("click", ()=> {
    updateDisplay([8]);
});
nineBtn.addEventListener("click", ()=> {
    updateDisplay([9]);
});
plusBtn.addEventListener("click", ()=> {
    updateDisplay(["+"]);
});
minusBtn.addEventListener("click", ()=> {
    updateDisplay(["-"]);
});
divisionBtn.addEventListener("click", ()=> {
    updateDisplay(["÷"]);
});
multBtn.addEventListener("click", ()=> {
    updateDisplay(["*"]);
});

enterBtn.addEventListener("click", ()=> {
    operate(...[operatorStorage, firstArr, newArr]);
});



