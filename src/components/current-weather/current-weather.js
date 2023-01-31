import "./current-weather.css";

const CurrentWeather = ({ data }) => {

  const UpperCaseLetter = (el) => {
    const newString = el.charAt(0).toUpperCase() + el.slice(1)

    return newString
  }

  const degreesWind = (el) => {
    if(el > 337.5 || el < 22.5) {
      return 'N'
    }
    else if(el >= 22.5 && el < 67.5) {
      return 'NE'
    }
    else if(el > 67.5 && el < 112.5) {
      return 'E'
    }
    else if(el > 112.5 && el < 157.5) {
      return 'SE'
    }
    else if(el > 157.5 && el < 202.5) {
      return 'S'
    }
    else if(el > 202.5 && el < 247.5) {
      return 'SW'
    }
    else if(el > 247.5 && el < 292.5) {
      return 'W'
    }
    else if(el > 292.5 && el < 337.5) {
      return 'NW'
    }
  }

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
        </div>
        <div className="top-right">
          <img
            alt="weather"
            className="weather-img"
            src={`icons/${data.weather[0].icon}.png`}
          />
          <p className="weather-description">{UpperCaseLetter(data.weather[0].description)}</p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <p className="temp-min-max">{Math.floor(data.main.temp_min)}°C | {Math.ceil(data.main.temp_max)}°C </p>
        </div>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{degreesWind(data.wind.deg)} | {data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {Math.round(data.main.humidity)}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {Math.round(data.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
