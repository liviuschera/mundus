import styled from 'styled-components';

export const PageWrapper = styled.main`
  max-width: 120rem;
  margin: 1rem auto;
  padding: 3rem;
`;
export const CountryWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
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
