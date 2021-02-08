import './App.css';
import { MouseTracker } from './Components/MouseTracker';
import { Cat } from './Components/Cat';


function App() {
  return (
    <div className="App">
      <MouseTracker render={(coordinats) => <Cat coordinats={coordinats} />} />
    </div>
  );
}

export default App;
