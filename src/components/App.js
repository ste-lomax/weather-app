import PropTypes from "prop-types";
import React from "react";

import "../styles/App.css";

import LocationDetails from "./LocationDetails";

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

function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <h1>Weather App by Steven!</h1>
      <LocationDetails city={city} country={country} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
