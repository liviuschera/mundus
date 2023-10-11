import React from "react";

import CustomLink from "../../components/custom-link/custom-link.component";

export function listItems(items) {
  console.log("function listItems(items): ", Object.values(items)[0]);
  // return (items instanceof Object ? Object.values(items) : items).map(
  return Object.values(items).map((item, index) => {
    return (
      <span key={item?.name?.toLowerCase() ?? item.toLowerCase()}>
        {item?.name ?? item}
        {items.length - 1 === index ? "" : ", "}
      </span>
    );
  });
}

export function makeArryOfBorderCountries(countriesArray, country) {
  console.log("country from country.utils.js: ", country);
  const borderCountries = country.borders ?? [];
  const borderCountriesArray = [];

  countriesArray.filter((count) => {
    if (borderCountries.includes(count.alpha3Code)) {
      borderCountriesArray.push(count);
    }
  });
  return borderCountriesArray;
}

export function displayBorderLinks(borderCountries, filteredCountries) {
  console.log("borderCountries", borderCountries);
  if (borderCountries.length < 1) return "None";
  return borderCountries.map((borderCountry) => {
    // console.log(borderCountry);
    return (
      <CustomLink
        key={borderCountry?.name}
        to={{
          pathname: `/country/${borderCountry.name
            .toLowerCase()
            .replace(/\s/g, "-")}`,
          state: { country: borderCountry, filteredCountries },
        }}
      >
        {borderCountry.name.replace(/\(.+?\)/, "")}
      </CustomLink>
    );
  });
}
