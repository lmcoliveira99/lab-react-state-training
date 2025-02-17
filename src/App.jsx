import "./App.css";
import LikeButton from "./Components/LikeButton";
import Counter from "./Components/Counter";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div>
        <section>
        <h2>LikeButton</h2>
        <LikeButton />
        </section>
        <section>
          <h2>Counter</h2>
        <Counter />
        </section>
        <section>
          <h2>ClickablePicture</h2>
          <ClickablePicture/>
        </section> 
        <section>
          <h2>Dice</h2>
          <Dice/>
        </section>
      </div>
    </div>

  );
}

export default App;
