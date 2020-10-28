import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <video src='videos/videos-3.mp4' autoPlay loop/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React! Im back
        </a>
      </header>
    </div>
  );
}

export default App;
