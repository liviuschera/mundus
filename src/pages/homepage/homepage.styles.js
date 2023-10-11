import styled from "styled-components";

export const HomepageWrapper = styled.main`
  max-width: 120rem;
  margin: 0 auto;
  padding: 3rem;

  sup {
    cursor: pointer;
    position: relative;
    &:hover::after {
      content: "Data from https://restcountries.com/";
      position: absolute;
      bottom: 100%;
      left: 100%;
      display: block;
      padding: 1rem;
      background: var(--elements-color);
      box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
    }
  }
`;

export const FormSection = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, auto));
  justify-content: space-between;
  gap: 2rem;
`;

export const CountryCount = styled.p`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
`;
