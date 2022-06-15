import PropTypes from "prop-types";
import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

// function App(props) {
//   return (
//     <div className="App">
//       <h1>Weather App</h1>
//       <LocationDetails
//         city={props.location.city}
//         country={props.location.country}
//       />
//     </div>
//   );
// }

function App({ forecasts, location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <h1>Weather App by Steven!</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
