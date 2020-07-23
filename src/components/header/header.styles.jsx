import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--elements-color);
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
  color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  height: 3.5rem;
  font-size: inherit;
  font-weight: 400;
  border-radius: 0.5rem;
  padding: 0 1rem;
  transition: all 500ms;

  &:hover {
    box-shadow: 0 0.1rem 2rem rgba(0, 0, 0, 0.2);
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
