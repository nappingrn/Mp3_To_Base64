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

        <VoicePage />
      </header>
    </div>
  );
}

export default App;
