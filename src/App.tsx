import { useState } from "react";

type Operations = null | "+" | "-" | "/" | "*";

function App() {
  const [display, setDisplay] = useState("0");
  const [chosenOperand, setChosenOperand] = useState<Operations>(null);
  const [firstInput, setFirstInput] = useState<number>(0);

  const reset = () => {
    setDisplay("0");
    setChosenOperand(null);
    setFirstInput(0);
  };

  const inputNumber = (input: string) => {
    setDisplay((prev) => {
      if (prev === "0") {
        return input;
      } else {
        return (prev += input);
      }
    });
  };

  const inputDecimal = () => {
    setDisplay((prev) => {
      if (prev.includes(".")) {
        return prev;
      } else {
        return (prev += ".");
      }
    });
  };
  // 3 + 5 * 6 - 2 / 4
  // 8 * 6 - 2 / 4
  // 48 - 2 / 4
  // 46 / 4
  // 11,5
  const operation = (input: Operations) => {
    if (chosenOperand != null) {
      if (input === "-") {
        setDisplay("-");
      } else {
        equals();
        setChosenOperand(input);
        setFirstInput(firstInput);
        setDisplay("");
      }
    } else {
      setChosenOperand(input);
      setFirstInput(parseFloat(display));
      setDisplay("");
    }
  };

  const equals = () => {
    const secondInput = parseFloat(display);
    switch (chosenOperand) {
      case "+": {
        const x = firstInput + secondInput;
        setDisplay(x.toString());
        setFirstInput(x);
        setChosenOperand(null);
        break;
      }
      case "-": {
        const x = firstInput - secondInput;

        setDisplay(x.toString());
        setFirstInput(x);
        setChosenOperand(null);
        break;
      }
      case "*": {
        const x = firstInput * secondInput;

        setDisplay(x.toString());
        setFirstInput(x);
        setChosenOperand(null);
        break;
      }
      case "/": {
        const x = firstInput / secondInput;

        setDisplay(x.toString());
        setFirstInput(x);
        setChosenOperand(null);
        break;
      }
    }
  };

  return (
    <>
      <div className="container">
        <div id="display">{display}</div>
        <div className="calculator">
          <button type="button" onClick={reset} id="clear">
            CLR
          </button>
          <button type="button" onClick={equals} id="equals">
            =
          </button>
          <button
            type="button"
            onClick={() => {
              operation("+");
            }}
            id="add"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => {
              operation("-");
            }}
            id="subtract"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              operation("*");
            }}
            id="multiply"
          >
            *
          </button>
          <button
            type="button"
            onClick={() => {
              operation("/");
            }}
            id="divide"
          >
            /
          </button>
          <button type="button" onClick={inputDecimal} id="decimal">
            .
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("0");
            }}
            id="zero"
          >
            0
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("1");
            }}
            id="one"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("2");
            }}
            id="two"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("3");
            }}
            id="three"
          >
            3
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("4");
            }}
            id="four"
          >
            4
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("5");
            }}
            id="five"
          >
            5
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("6");
            }}
            id="six"
          >
            6
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("7");
            }}
            id="seven"
          >
            7
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("8");
            }}
            id="eight"
          >
            8
          </button>
          <button
            type="button"
            onClick={() => {
              inputNumber("9");
            }}
            id="nine"
          >
            9
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
