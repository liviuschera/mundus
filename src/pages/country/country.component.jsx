import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    PageWrapper,
    CountryWrapper,
    Flag,
    InfoWrapper,
    DetailsWrapper,
    Info,
    Name,
    Header,
    ImagesContainer,
    ImageWrapper,
} from "./country.styled";
import CustomLink from "../../components/custom-link/custom-link.component";

import {
    makeArryOfBorderCountries,
    listItems,
    displayBorderLinks,
} from "./country.utils";
import useFetch from "../../utils/useFetch";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/Spinner";

export default function Country({ ...params }) {
    const history = useHistory();
    const [isHovering, setIsHovering] = useState(false);
    const country = params.location.state.country;
    console.log("🚀 ~ Country ~ country:", country);
    const filteredCountries = params.location.state.filteredCountries;
    const countryNativeName = Object.entries(country.name.nativeName)[0][1]
        .official;
    const borderCountries = makeArryOfBorderCountries(
        filteredCountries,
        country
    );

    const searchTerm = `${country.name.common.toLowerCase()}`;
    const imageURL = `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
    }&q=${encodeURIComponent(searchTerm)}&image_type=photo`;

    const {
        data: countryImages,
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ["countryImages", searchTerm],
        queryFn: async () => {
            const response = await fetch(imageURL);
            if (!response.ok) {
                console.error("Cannot fetch images");
                throw new Error("Cannot fetch images");
            }
            return response.json();
        },
    });

    // const countryImages = useFetch(
    //     `https://pixabay.com/api/?key=${
    //         // process.env.REACT_APP_PIXABAY_API_KEY
    //         import.meta.env.VITE_PIXABAY_API_KEY
    //     }&q=${encodeURIComponent(searchTerm)}&image_type=photo`
    // );

    return (
        <PageWrapper>
            <CustomLink as="button" onClick={() => history.goBack()} $button>
                <span>&larr;</span> Back
            </CustomLink>
            <CountryWrapper>
                <MapContainer
                    center={country.latlng}
                    zoom={5}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                    />
                </MapContainer>

                <InfoWrapper>
                    <Header>
                        <Name>{country.name.common}</Name>
                        <Flag>
                            {
                                <img
                                    src={country.flags.png}
                                    alt={`Flag of ${country.name.common}`}
                                />
                            }
                        </Flag>
                    </Header>
                    <DetailsWrapper>
                        <Info>
                            <strong>Native Name: </strong>
                            {countryNativeName}
                        </Info>
                        <Info>
                            <strong>Population: </strong>
                            {new Intl.NumberFormat().format(country.population)}
                        </Info>
                        <Info>
                            <strong>Region: </strong>
                            {country.region}
                        </Info>
                        <Info>
                            <strong>Sub Region: </strong>
                            {country.subregion}
                        </Info>
                        <Info>
                            <strong>Capital: </strong>
                            {country.capital}
                        </Info>
                        <Info>
                            <strong>Top Level Domain: </strong>
                            {country.tld[0]}
                        </Info>
                        <Info>
                            <strong>Currencies: </strong>
                            {listItems(country.currencies)}
                        </Info>
                        <Info>
                            <strong>Languages: </strong>
                            {listItems(country.languages)}
                        </Info>
                        <Info>
                            <strong>Time Zones: </strong>
                            {listItems(country.timezones)}
                        </Info>
                    </DetailsWrapper>
                    <Info>
                        <strong>Border Countries: </strong>
                        {displayBorderLinks(borderCountries, filteredCountries)}
                    </Info>
                </InfoWrapper>
            </CountryWrapper>
            <ImagesContainer>
                {isPending ? (
                    <Spinner />
                ) : (
                    countryImages?.hits
                        ?.slice(0, 5)
                        .map((country) => (
                            <ImageWrapper
                                key={country.id}
                                $thumbnail={country.previewURL}
                                $webformatURL={country.webformatURL}
                            ></ImageWrapper>
                        ))
                )}
                {isError && <p>{error.message}</p>}
            </ImagesContainer>
        </PageWrapper>
    );
}
