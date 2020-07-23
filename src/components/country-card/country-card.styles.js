import styled from 'styled-components';

export const CountryCardWrapper = styled.div`
  font-size: 1.3rem;
  height: 30rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
  padding: 1rem 2rem;
`;

export const Flag = styled.div`
  width: 100%;
  height: 50%;
  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Info = styled.p`
  span {
    font-weight: 600;
  }
`;
