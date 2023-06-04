import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="Portfolio">
      <h2>Portfolio</h2>

      <span>Name: <input type='text' /></span>
      <span>Date:<input type='date'/></span>
      <span>Color:<input type='color'/></span>
      <span>Email:<input type="email"/></span>
     <Button name="Submit"></Button>
    </div>
  );
}

export default App;
