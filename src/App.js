import './App.css';
import Header from './components/Header/Header';
import WeatherList from './components/Content/WeatherList/WeatherList'
import data from './weather.json'

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherList weatherData={data}/>
    </div>
  );
}

export default App;
