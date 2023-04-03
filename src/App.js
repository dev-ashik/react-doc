import logo from './logo.svg';
import './App.css';

let guest = 0;

function Cup() {
  guest = guest + 1;

  return <h2>Tea cup for guest :{guest}</h2>
}

function App() {
  return (
    <div className="App">
      <Cup/>
      <Cup/>
      <Cup/>
    </div>
  );
}

export default App;
