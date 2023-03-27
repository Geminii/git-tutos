import reactLogo from "./assets/react.svg";
import "./App.css";
import { BumpButton } from "./components/BumpButton/BumpButton";

function App() {
  return (
    <div className="App">
      <h1>Awesome Button react</h1>
      <h2>Oh nooo what happened ?!</h2>
      <div className="card">
        <BumpButton>Hello Jimmy !</BumpButton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
