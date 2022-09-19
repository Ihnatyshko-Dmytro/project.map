import './App.scss';

import Header from './Components/Header/';
import Nav from './Components/Nav/';
import { Map } from './Components/Map';
import Houses from './Components/Houses/';



function App() {


  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Header />
        <Map/>
        <Houses />
      </div>
    </div>
  );
}

export default App;
