const keys = document.querySelectorAll('.btn');
const result = document.querySelector('.result-area');

const backspace = document.querySelector('#backspace');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const square = document.querySelector('#square');
const cube = document.querySelector('#cube');

keys.forEach((e) => {
  const keyValue = e.getAttribute('value');

  e.addEventListener('click', () => {
    if (
      (keyValue === "." && result.value.includes(".")) ||
      (keyValue === "*" && result.value.includes("*")) ||
      (keyValue === "+" && result.value.includes("+")) ||
      (keyValue === "-" && result.value.includes("-")) ||
      (keyValue === "/" && result.value.includes("/"))) {
      return;
    }; 
    result.value = result.value.concat(keyValue);
  });
});

// Delete
backspace.addEventListener('click', () => {
  result.value = result.value.slice(0, -1)
});

// Clear
clear.addEventListener('click', () => {
  result.value = '';
});

// Equal
equal.addEventListener('click', () => {
 if (!result.value == "") {
    result.value = eval(result.value);
  }
});

// Square
square.addEventListener('click', () => {
  if (!result.value == "") {
    result.value = eval(result.value * result.value);
  }
});

// Cube
cube.addEventListener('click', () => {
  if (!result.value == "") {
    result.value = eval(result.value * result.value * result.value);
  };

//Check
  if(isNaN(result.value)){
    result.value = "";
  }
});

