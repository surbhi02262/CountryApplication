import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryList extends Component {
  state = {
    countryListItems: []
  };
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(countryListItem =>
        this.setState({ countryListItems: countryListItem })
      );
  }
  render() {
    const { countryListItems } = this.state;
    return (
      <div>
        {countryListItems.map((countryItems, index) => {
          console.log("countryItems", countryItems.name);
          return (
            <div className="item-details" key={index}>
              <div className="flag-image-container">
                <img src={countryItems.flag} alt="flag" />
              </div>
              <div>Name :{countryItems.name}</div>
              <div>Region: {countryItems.region}</div>
              <div>SubRegion: {countryItems.subregion}</div>
              {countryItems.currencies.map((currency, index) => (
                <div key={index}>
                  Currency:
                  {currency.name}
                </div>
              ))}
              <Link to={`/country/${countryItems.alpha3Code}`}>
                {countryItems.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CountryList;
