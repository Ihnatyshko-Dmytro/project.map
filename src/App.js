import './App.scss';

import Header from './Components/Header/';
import Nav from './Components/Nav/';
import { Map } from './Components/Map';
import Houses from './Components/Houses/';

let data = [
  {
    "images": ['1', '2', '3'],
    "title": "Двокімнатна квартира на оболоні",
    "prise": 10000,
    "adress": "вул.Оболонська, 75, кв. 54",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officia?"
  },
  
  {
    "images": ['1', '2', '3'],
    "title": "Двокімнатна квартира на оболоні",
    "prise": 10000,
    "adress": "вул.Оболонська, 75, кв. 54",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officia?"
  },

  {
    "images": ['1', '2', '3'],
    "title": "Двокімнатна квартира на оболоні",
    "prise": 10000,
    "adress": "вул.Оболонська, 75, кв. 54",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officia?"
  }
]

function App() {

console.log()

  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Header />
        {/* <Map/> */}
        <Houses data={data}/>
      </div>
    </div>
  );
}

export default App;
