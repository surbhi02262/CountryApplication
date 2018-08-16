import React, { Component } from "react";

class CountryDetails extends Component {
  state = {
    countryDetails: {}
  };
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params.countryCode) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${params.countryCode}`)
        .then(response => response.json())
        .then(countryDetail =>
          this.setState({ countryDetails: countryDetail })
        );
    }
  }
  render() {
    const { countryDetails } = this.state;
    return (
      <div>
        {countryDetails.name && (
          <div>
            <div>{countryDetails.name}</div>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;
