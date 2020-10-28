import logo from './logo.svg';
import './App.css';
import Video from './videos/videos-3.mp4'

function App() {
  return (
    <div className="App">
      <VideoBg playsinline autoPlay loop muted src={Video} type="video/mp4"/>
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
