// document.addEventListener('DOMContentLoaded', (e) => {
//     const screen = document.getElementById('screen');
//     const operators = ['+', '-', '*', '/', ];
//     let lastInputIsOperator = false;

//     const updateScreen = (value) => {
//         screen.value = value;
//         localStorage.setItem('calcValue', value);
//     };

//     const buttons = document.querySelectorAll('.btn button');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const value = button.getAttribute('data-value');
//             const lastChar = screen.value[screen.value.length - 1];

//             if (value) {
//                 if (operators.includes(value)) {
//                     if (lastInputIsOperator || screen.value === '') {
//                         return;
//                     } else {
//                         if (value === '.' && lastChar === '.') {
//                             return; 
//                         }
//                         lastInputIsOperator = true;
//                     }
//                 } else {
//                     lastInputIsOperator = false;
//                 }

//                 if (value === '.' && lastChar === '.') {
//                     return; // Do not allow consecutive dots
//                 }

//                 // Check if the last input was an operator and the current input is a dot
//                 if (operators.includes(lastChar) && value === '.') {
//                     return; // Do not allow dot immediately after an operator
//                 }



               
//                 // if (value === '.') {
//                 //     const parts = screen.value.split(/[\+\-\*\/]/);
//                 //     const lastPart = parts[parts.length - 1];
//                 //     if (lastPart.includes('.')) {
//                 //         return; 
//                 //     }
//                 // }

//                 const newValue = screen.value + value;
//                 updateScreen(newValue);
//             }
            
//         });
//     });

//     const deleteButton = document.querySelector('.del');
//     deleteButton.addEventListener('click', () => {
//         const newValue = screen.value.slice(0, -1);
//         updateScreen(newValue);

//         const lastChar = screen.value[screen.value.length - 1];
//         lastInputIsOperator = operators.includes(lastChar);
//     });

//     const resetButton = document.querySelector('.reset');
//     resetButton.addEventListener('click', () => {
//         updateScreen('');
//     });

//     const equalButton = document.querySelector('.equal');
//     equalButton.addEventListener('click', () => {
//         try {
//             const result = eval(screen.value);
//             updateScreen(result);
//             lastInputIsOperator = false;
//         } catch {
//             updateScreen('Error');
//         }
//     });


    
//     const one = document.getElementById('one');
//     one.addEventListener('click', () => {
//         document.body.classList.remove('active1');
//         document.body.classList.remove('active2');
//         document.getElementById('circle').style.left = '0';
//     });



//     const two = document.getElementById('two');
//     two.addEventListener('click', () => {
//         document.body.classList.add('active1');
//         document.body.classList.remove('active2');
//         document.getElementById('circle').style.left = '35%';
//     });

    

//     const three = document.getElementById('three');
//     three.addEventListener('click', () => {
//         document.body.classList.add('active2');
//         document.body.classList.remove('active1');
//         document.getElementById('circle').style.left = '70%';
//     });
// });


document.getElementById("plus").onclick = function () {
    var inputElement = document.getElementById("screen").value;
    //   console.log(inputElement);
    var lastChar = inputElement[inputElement.length - 1];
  
    if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "/" ||
      lastChar === "."
    ) {
      inputElement = inputElement.slice(0, inputElement.length - 1) + "+";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    } else {
      inputElement = inputElement.slice(0, inputElement.length) + "+";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    }
  };
  
  document.getElementById("minus").onclick = function () {
    // 256+
    var inputElement = document.getElementById("screen").value;
    //   console.log(inputElement);
    var lastChar = inputElement[inputElement.length - 1];
    //   console.log(lastChar);
  
    if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "/" ||
      lastChar === "."
    ) {
      inputElement = inputElement.slice(0, inputElement.length - 1) + "-";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    } else {
      inputElement = inputElement.slice(0, inputElement.length) + "-";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    }
  };
  
  document.getElementById("into").onclick = function () {
    // 256+
    var inputElement = document.getElementById("screen").value;
    //   console.log(inputElement);
    var lastChar = inputElement[inputElement.length - 1];
    //   console.log(lastChar);
  
    if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "/" ||
      lastChar === "."
    ) {
      inputElement = inputElement.slice(0, inputElement.length - 1) + "*";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    } else {
      inputElement = inputElement.slice(0, inputElement.length) + "*";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    }
  };
  
  document.getElementById("division").onclick = function () {
    // 256+
    var inputElement = document.getElementById("screen").value;
    //   console.log(inputElement);
    var lastChar = inputElement[inputElement.length - 1];
    //   console.log(lastChar);
  
    if (
      lastChar === "+" ||
      lastChar === "*" ||
      lastChar === "-" ||
      lastChar === "/" ||
      lastChar === "."
    ) {
      inputElement = inputElement.slice(0, inputElement.length - 1) + "/";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    } else {
      inputElement = inputElement.slice(0, inputElement.length) + "/";
      document.getElementById("screen").value = inputElement;
      // console.log(inputElement);
    }
  };
  
  // document.getElementById("point").onclick = function () {
  //   // 256+
  //   var inputElement = document.getElementById("screen").value;
  //   //   console.log(inputElement);
  //   var lastChar = inputElement[inputElement.length - 1];
  //   //   console.log(lastChar);
  
  //   if (
  //     lastChar === "+" ||
  //     lastChar === "*" ||
  //     lastChar === "-" ||
  //     lastChar === "/" ||
  //     lastChar === "."
  //   ) {
  //     inputElement = inputElement.slice(0, inputElement.length - 1) + ".";
  //     document.getElementById("screen").value = inputElement;
  //     // console.log(inputElement);
  //   } else {
  //     inputElement = inputElement.slice(0, inputElement.length) + ".";
  //     document.getElementById("screen").value = inputElement;
  //     // console.log(inputElement);
  //   }
  // };




// adding keyPress event .
// function handleNumber(num) {
//   document.calc.text.value += num;
// }

// var screen=document.getElementById("screen");
// var operator=['+' , '-' , '/' , '*'];

// //function for numeric button 
// function handleNumber(num){

// }

// function handleNumber(num){
//   document.cal.text.value +=num;
// }
// Function to handle numeric buttons and keyboard input


// function handleNumber(num) {
//   var currentValue = document.calc.text.value;
//   document.calc.text.value = currentValue + num;
// }

// // Function to handle operator buttons and keyboard input
// function handleOperator(operator) {
//   var inputValue = document.calc.text.value;
//   var lastChar = inputValue[inputValue.length - 1];

//   // Check if the last character is an operator or a dot
//   if (['+', '-', '*', '/'].includes(lastChar)) {
//       // Replace the last character with the new operator
//       document.calc.text.value = inputValue.slice(0, -1) + operator;
//   } else {
//       // Append the operator
//       document.calc.text.value += operator;
//   }
// }

// function handleDecimal() {
//   var inputValue = document.calc.text.value;
//   var lastChar = inputValue[inputValue.length - 1];

//   // Check if the last character is an operator or a dot
//   if (!['+', '-', '*', '/', '.'].includes(lastChar)) {
//       // Append the decimal point
//       document.calc.text.value += '.';
//   }
// }

// function del() {
//   var inputValue = document.calc.text.value;
//   document.calc.text.value = inputValue.slice(0, -1);
// }

// function calculate() {
//   var inputValue = document.calc.text.value;
//   try {
//       document.calc.text.value = eval(inputValue);
//   } catch (e) {
//       document.calc.text.value = 'Error';
//   }
// }

// function clearScreen() {
//   document.calc.text.value = '';
// }


// for operator

// function handleOperator(operator){
//   var currentValue=document.cal.text.value;
//   var lastChar=currentValue[currentValue.length-1];

//   if(!['+','-','*','/'].includes(lastChar)){
//     document.cal.text.value +=operator;

//   }else{
//     document.oncancel.text.value=currentValue.slice(0,1)+operator;
//   }
// }



// Event  for keyboard input
document.addEventListener('keydown', function(event) {
  var key = event.key;

  // for numeric keys
  if (key >= '0' && key <= '9') {
    handleNumber(key);
}
  //  operator keys
  if (['+', '-', '*', '/'].includes(key)) {
      handleOperator(key);
  }

  // decimal point
  if (key === '.') {
      handleDecimal();
  }

  // for calculation
  if (key === 'Enter') {
      calculate();
  }

  //  for deletion
  if (key === 'Delete' || key === 'Backspace') {
      del();
  }
})

// keyboard input
function handleOperator(operator) {
  var screen = document.getElementById("screen");
  
  var inputElement = screen.value;
  var lastChar = inputElement[inputElement.length - 1];


  if (['+', '-', '*', '/', '.'].includes(lastChar)) {
      inputElement = inputElement.slice(0, -1) + operator;
  } else {
      inputElement += operator;
  }
  screen.value = inputElement;
}

// Function to handle DEL button
function del() {
  var screen = document.getElementById('screen');
  screen.value = screen.value.slice(0, -1);
}

// Function to handle numeric buttons and keyboard input
function handleNumber(num) {
  var screen = document.getElementById('screen');
  screen.value += num;
}

// Function to RESET button
function clearScreen() {
  document.getElementById('screen').value = '';
}

function calculate() {
  var screen = document.getElementById('screen');
  try {
      screen.value = eval(screen.value);
  } catch (e) {
      screen.value = 'Error';
  }
}

function handleDecimal() {
  var screen = document.getElementById('screen');
  var inputElement = screen.value;
  var lastChar = inputElement[inputElement.length - 1];

  // if (!['+', '-', '*', '/', '.'].includes(lastChar)) {}

      screen.value += '.';
  
};


// function del(){
//     var value=document.getElementById('screen').value;
//     document.getElementById('screen').value=value.substr(0,value.length-1);
//     }
    var one=document.getElementById('one');
    one.addEventListener('click',function(){
        var body=document.querySelector('body');
        var toggle=document.getElementById('circle');
        body.classList.remove('active1');
        body.classList.remove('active2');
        toggle.style.left='0';
        });

	  var two=document.getElementById('two');
    two.addEventListener('click',function(){
		var body=document.querySelector('body');
        var toggle=document.getElementById('circle');
        body.classList.add('active1');
		    body.classList.remove('active2');
		   toggle.style.left='36%';
       });
		
	  var three=document.getElementById('three');
    three.addEventListener('click',function(){
        var body=document.querySelector('body');
        var toggle=document.getElementById('circle');
        body.classList.add('active2');
        body.classList.remove('active1');
        toggle.style.left='65%';
        });

