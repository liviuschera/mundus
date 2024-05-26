import styled from "styled-components";

export const PageWrapper = styled.main`
    max-width: 120rem;
    margin: 1rem auto;
    padding: 3rem;
`;
export const CountryWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 6fr;
    gap: 7rem;
`;

export const InfoWrapper = styled.article`
    display: grid;
    align-content: center;
    gap: 2rem;
`;

export const DetailsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    /* gap: 2rem; */

    justify-content: space-between;
`;
export const Header = styled.header`
    display: inline-grid;
    grid-template-columns: max-content 15rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
`;

export const Flag = styled.aside`
    /* width: 20rem; */
    height: 5rem;

    img {
        width: inherit;
        height: inherit;
        /* object-fit: cover; */
    }
`;
export const Name = styled.h3`
    font-size: 2rem;
    font-weight: 700;
`;

export const Info = styled.p`
    font-size: 1.5rem;
    line-height: 2.3rem;

    strong {
        font-weight: 600;
    }
`;

export const ImagesContainer = styled.div`
    display: flex;
    margin-top: 3rem;
    justify-content: space-between;
`;
export const ImageWrapper = styled.div`
    width: 15rem;
    height: 15rem;
    transition: all 0.3s;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    background-image: url(${(props) =>
        props.$thumbnail ? props.$thumbnail : null});
    background-size: cover;
    &:hover {
        background-image: url(${(props) =>
            props.$webformatURL ? props.$webformatURL : null});
        width: 100%;
        height: 50rem;
        margin-top: -35rem;
        background-size: cover;
        box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.3);
        background-repeat: no-repeat;
        z-index: 9999;
    }
`;

export const HoverImage = styled.img`
    width: inherit;
    height: inherit;
`;
