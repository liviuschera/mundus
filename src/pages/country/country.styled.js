import styled from 'styled-components';

export const CountryWrapper = styled.main`
  max-width: 120rem;
  margin: 5rem auto 0;
  padding: 3rem;
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 15rem;
  /* align-content: center; */
`;

export const Flag = styled.aside`
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2);
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
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
