import React, { useState } from "react";

import { HomepageWrapper, FormSection, CountryCount } from "./homepage.styles";

import SearchForm from "../../components/forms/search-form/search-form.component";
import SelectForm from "../../components/forms/select-region-form/select-region-form.component";
import CountryCardList from "../../components/country-card-list/country-card-list.component";

import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner";

const regionsArray = [
    { label: "Filter by Region", value: "Filter by Region" },
    { label: "Africa", value: "Africa" },
    { label: "Americas", value: "Americas" },
    { label: "Asia", value: "Asia" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
];

export default function Homepage() {
    const [selectRegion, setSelectRegion] = useState("Filter by Region");
    const [inputCountry, setInputCountry] = useState("");

    // const [countries, setCountries] = useState([]);

    function onInputChange(event) {
        setInputCountry(event.target.value);
    }

    function onSelectChange(event) {
        setSelectRegion(event.target.value);
    }

    const countriesUrl =
        selectRegion === "Filter by Region"
            ? "https://restcountries.com/v3.1/all"
            : `https://restcountries.com/v3.1/region/${selectRegion}`;

    const whichRegion =
        selectRegion === "Filter by Region" ? "the World" : selectRegion;

    const {
        data: countries,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ["countries", countriesUrl],
        queryFn: async () => {
            const response = await fetch(countriesUrl);
            if (!response.ok) {
                console.error("Cannot fetch countries");
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
    });
    if (isPending) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    return (
        <HomepageWrapper>
            <FormSection>
                <SearchForm
                    onInputChange={onInputChange}
                    countries={countries}
                />
                <SelectForm
                    onSelectChange={onSelectChange}
                    region={selectRegion}
                    $regionsarray={regionsArray}
                />
            </FormSection>

            <CountryCount>
                There are&nbsp;
                {countries?.length} &nbsp;countries in {whichRegion}
                &nbsp;
                <sup>*</sup>
            </CountryCount>

            <CountryCardList
                countries={countries}
                inputCountry={inputCountry}
                selectRegion={selectRegion}
                region={selectRegion}
                len={countries?.length}
            />
        </HomepageWrapper>
    );
}
