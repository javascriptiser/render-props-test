import './App.css';
import { CatWithMouseTracker } from './Components/HighOrderComponents/CatWithMouseTracker';
import { Cat } from './Components/RenderPropsComponents/Cat';
import { MouseTracker } from './Components/RenderPropsComponents/MouseTracker';



function App() {
  return (
    <div className="App">
      {/* <MouseTracker render={(coordinats) => <Cat coordinats={coordinats} />} /> */}
      <CatWithMouseTracker />
    </div>
  );
}

export default App;
