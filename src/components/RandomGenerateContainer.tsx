import { useState } from "react";

export default function RandomGenerateContainer() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);

  function generateRandomNumber(): void {
    let value = Math.round(Math.random() * (maxValue - minValue) + minValue);
    setRandomNumber(value);
  }

  return (
    <div className="container">
      <div className="box">
        <header>
          <p>Random Number Generator</p>
        </header>
        <div>
          <div>
            <span>DE: </span>
            <input
              type="number"
              onChange={(event) => setMinValue(Number(event.target.value))}
            />
          </div>
          <div>
            <span>ATÉ: </span>
            <input
              type="number"
              onChange={(event) => setMaxValue(Number(event.target.value))}
            />
          </div>
        </div>
        <footer>
          <span>Resultado: </span>
          <input type="number" disabled={true} value={randomNumber} />
          <button onClick={generateRandomNumber}>
            <span>Gerar</span>
            <img src="/Icons/refresh.svg" alt="" />
          </button>
        </footer>
      </div>
    </div>
  );
}
