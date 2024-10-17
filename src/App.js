import logo from './kkkkkkkakaka.jpg';
import logop from './costam.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          <h1>Rybka minimini</h1>
          <h5>DRAMAT</h5>
      <h6>Godziny spektaklu: 14:30  ORAZ 19:00</h6>
          <h7>PREMIERA</h7>

        </p>

        <img src={logop} className="App-logo" alt="logo"/>
        <p>
          <h1>Akademia Pana Kleksa</h1>
          <h5>FILM FAMILIJNY FANTASY</h5>
          <h6>Godziny spektaklu: 12:30 ORAZ 15:50</h6>
          <h7>PREMIERA</h7>
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
