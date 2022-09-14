import './App.scss';

import { useJsApiLoader } from '@react-google-maps/api';

import Header from './Components/Header/';
import Nav from './Components/Nav/';
import { Map } from './Components/Map';
import Houses from './Components/Houses/';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
  lat: 50.43,
  lng: 30.511,
};

const libreries = ['plases']


function App() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libreries
  });

  console.log(isLoaded);
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Header />
        {/* {isLoaded ? <Map center={defaultCenter} isLoaded={isLoaded} /> : <h2>Loading...</h2>} */}
        <Houses />
      </div>
    </div>
  );
}

export default App;
