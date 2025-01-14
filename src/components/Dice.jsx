import { useState } from "react";
import dice1 from "../assets/images/dice-empty.png";
import dice2 from "../assets/images/dice1.png";
import dice3 from "../assets/images/dice2.png";
import dice4 from "../assets/images/dice3.png";
import dice5 from "../assets/images/dice4.png";
import dice6 from "../assets/images/dice5.png";
import dice7 from "../assets/images/dice6.png";

function Dice() {
    const [currentNumber, setCurrentNumber] = useState(0);
  
    const rollDice = () => {
      setCurrentNumber(0);
      setTimeout(() => {
        const newNumber = Math.floor(Math.random() * 6) + 1;
        setCurrentNumber(newNumber);
      }, 1000);
    };
  
    const diceImages = [dice2, dice3, dice4, dice5, dice6, dice7];
    const currentImage = currentNumber === 0 ? dice1 : diceImages[currentNumber - 1];
  
    return (
      <section>
        <img className="dice" onClick={rollDice} src={currentImage} alt={`Dice ${currentNumber}`} />
      </section>
    );
  }

export default Dice;