import React from "react";
import { Link } from "react-router-dom";
import {
    CardWrapper,
    DetailsContainer,
    Flag,
    Name,
    Info,
} from "./country-card.styles";

export default function CountryCard({ country, filteredCountries }) {
    return (
        <Link
            key={country.name.common}
            to={`/country/${country.name.common
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            state={{ country, filteredCountries }}
        >
            <CardWrapper>
                <Flag>
                    <img
                        src={country.flags.png}
                        alt={`flag of ${country.name.common}`}
                    />
                </Flag>
                <DetailsContainer>
                    <Name>{country.name.common}</Name>
                    <div>
                        <Info>
                            <span>Population: </span>
                            {country.population}
                        </Info>
                        <Info>
                            <span>Region: </span>
                            {country.region}
                        </Info>
                        <Info>
                            <span>Capital: </span>
                            {country.capital}
                        </Info>
                    </div>
                </DetailsContainer>
            </CardWrapper>
        </Link>
    );
}
