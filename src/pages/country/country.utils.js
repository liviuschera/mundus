import React from "react";

import CustomLink from "../../components/custom-link/custom-link.component";

export function listItems(items) {
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
    const borderCountries = country.borders ?? [];
    const borderCountriesArray = [];

    countriesArray.filter((countryObject) => {
        if (borderCountries.includes(countryObject.cca3)) {
            borderCountriesArray.push(countryObject);
        }
    });
    return borderCountriesArray;
}

export function displayBorderLinks(borderCountries, filteredCountries) {
    if (borderCountries.length < 1) return "None";
    return borderCountries.map((borderCountry) => {
        return (
            <CustomLink
                key={borderCountry?.name?.common}
                to={{
                    pathname: `/country/${borderCountry.name.common
                        .toLowerCase()
                        .replace(/\s/g, "-")}`,
                    state: { country: borderCountry, filteredCountries },
                }}
            >
                {borderCountry.name.common.replace(/\(.+?\)/, "")}
            </CustomLink>
        );
    });
}
