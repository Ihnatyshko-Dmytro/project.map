import './App.scss';
import Header from './Components/Header/';
import Nav from './Components/Nav/';
import Maps from './Components/Maps/';
import Houses from './Components/Houses/';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Header />
        <Maps />
        <Houses />
      </div>
    </div>
  );
}

export default App;
