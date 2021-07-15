import './App.css';
import BtnComponent from './BtnComponent';


function App() {
  
  return (
    <div className="App">
      <p>
        There are 4 counter component instances that each manage their own
        state.
      </p>
      <div className="btn">
        <BtnComponent />
        <BtnComponent />
        <BtnComponent />
        <BtnComponent />
      </div>
    </div>
  );
}

export default App;