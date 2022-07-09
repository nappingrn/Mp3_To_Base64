import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VoicePage from './Pages/Voice/Voice.page';
import NavbarTop from './Components/Navbar/Navbar.component';

function App() {
  return (
    <div className="App">
      <NavbarTop />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VoicePage />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
