import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Screen from "./Screen";
import ButtonsDisplay from "./ButtonsDisplay";

export default function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Screen />
        <ButtonsDisplay />
      </div>
    </div>
  );
}


