import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--background-color);
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`;

export const ThemeSwitcher = styled.button`
  /* line-height: 100%; */
  /* text-decoration: none; */
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  /* width: 3rem; */
  height: 3rem;
  border-radius: 3rem;
  padding: 0 1rem;
  transition: all 300ms;

  &:hover {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
    background-color: var(--input-color);
    transform: translateY(-0.2rem);
    color: var(--background-color);
  }

  &:active {
    color: var(--input-color);
    background-color: var(--background-color);
    box-shadow: none;
    transform: translateY(0);
  }
`;
