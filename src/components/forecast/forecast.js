import {
  Accordion,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

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
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {UpperCaseLetter(item.weather[0].description)}
                  </label>
                  <label className="min-max">
                    {Math.floor(item.main.temp_min)}°C /{" "}
                    {Math.ceil(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind:</label>
                  <label>{degreesWind(item.wind.deg)} | {item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level} m</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
