import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';

function App() {

  const handleOnSearchChange = (dataSearch) => {
    const [lat, lon] = dataSearch.value.split(" ");
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
