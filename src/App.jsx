import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [lastInputIsOperator, setLastInputIsOperator] = useState(false);
  const [isKeyDownListenerActive, setIsKeyDownListenerActive] = useState(true);

  const operators = ['+', '-', '*', '/'];

  // Manage keydown event listener based on state
  useEffect(() => {
    if (isKeyDownListenerActive) {
      const handleKeyDown = (event) => {
        const key = event.key;
        if (key >= '0' && key <= '9') {
          handleInput(key);
        } else if (operators.includes(key)) {
          handleInput(key);
        } else if (key === '.') {
          handleDecimal();
        } else if (key === 'Enter') {
          handleEvaluate();
        } else if (key === 'Delete' || key === 'Backspace') {
          handleDelete();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isKeyDownListenerActive, input]);

  const updateScreen = (value) => {
    setInput(value);
    localStorage.setItem('calcValue', value);
  };

  const handleInput = (value) => {
    if (operators.includes(value)) {
      if (lastInputIsOperator || input === '') return;
      setLastInputIsOperator(true);
    } else {
      setLastInputIsOperator(false);
    }
    updateScreen(input + value);
  };

  const handleDelete = () => {
    const newValue = input.slice(0, -1);
    updateScreen(newValue);
    const lastChar = newValue[newValue.length - 1];
    setLastInputIsOperator(operators.includes(lastChar));
  };

  const handleReset = () => {
    updateScreen("");
  };

  const handleEvaluate = () => {
    try {
      const result = eval(input);
      updateScreen(result.toString());
      setLastInputIsOperator(false);
    } catch {
      updateScreen("Error");
    }
  };

  const handleDecimal = () => {
    const lastChar = input[input.length - 1];
    if (!operators.includes(lastChar) && lastChar !== '.') {
      updateScreen(input + '.');
    }
  };

  const handleThemeChange = (theme) => {
    const body = document.querySelector('body');
    const circle = document.getElementById('circle');
    body.classList.remove('active1', 'active2');
    if (theme === 1) {
      circle.style.left = '0';
    } else if (theme === 2) {
      body.classList.add('active1');
      circle.style.left = '35%';
    } else if (theme === 3) {
      body.classList.add('active2');
      circle.style.left = '70%';
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <div className="toggle">
            <h3>Calc</h3>
            <div className="right">
              <p id="one" onClick={() => handleThemeChange(1)}>1</p>
              <p id="two" onClick={() => handleThemeChange(2)}>2</p>
              <p id="three" onClick={() => handleThemeChange(3)}>3</p>
            </div>
          </div>
          <div className="control">
            <p>Theme</p>
            <div className="box">
              <div id="circle"></div>
            </div>
          </div>
        </div>
        <div className="screen">
          <form name="calc">
            <input type="text" name="text" readOnly id="screen" value={input} minLength="1" maxLength="10" />
          </form>
        </div>
        <div className="cal-body">
          <div className="btn">
            <button className="num" onClick={() => handleInput('7')}>7</button>
            <button className="num" onClick={() => handleInput('8')}>8</button>
            <button className="num" onClick={() => handleInput('9')}>9</button>
            <button className="del" onClick={handleDelete}>DEL</button>
            <button className="num" onClick={() => handleInput('4')}>4</button>
            <button className="num" onClick={() => handleInput('5')}>5</button>
            <button className="num" onClick={() => handleInput('6')}>6</button>
            <button id="plus" onClick={() => handleInput('+')}>+</button>
            <button className="num" onClick={() => handleInput('1')}>1</button>
            <button className="num" onClick={() => handleInput('2')}>2</button>
            <button className="num" onClick={() => handleInput('3')}>3</button>
            <button id="minus" onClick={() => handleInput('-')}>-</button>
            <button id="point" onClick={() => handleInput('.')}>.</button>
            <button className="num" onClick={() => handleInput('0')}>0</button>
            <button id="division" onClick={() => handleInput('/')}>/</button>
            <button id="into" onClick={() => handleInput('*')}>X</button>
            <button className="reset" onClick={handleReset}>RESET</button>
            <button className="equal" onClick={handleEvaluate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
