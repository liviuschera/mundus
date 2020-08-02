import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkEl = styled(Link)`
  display: inline-block;
  border-radius: 0.3rem;
  line-height: 2rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  background-color: var(--elements-color);
  box-shadow: ${(props) =>
    props.button
      ? '0 0 0.3rem rgba(0, 0, 0, 0.2)'
      : '0 0 0.2rem rgba(0, 0, 0, 0.1)'};
  margin: ${(props) => (props.button ? '2rem 0 5rem 0' : '0.5rem')};
  padding: ${(props) =>
    props.button ? '0.2rem 2rem 0.2rem 5rem' : '0.3rem 1.5rem'};
  position: relative;

  &:hover {
    box-shadow: ${(props) =>
      props.button
        ? '0 0 0.3rem rgba(0, 0, 0, 0.3)'
        : '0 0 0.4rem rgba(0, 0, 0, 0.2)'};
  }
  span {
    position: absolute;
    font-size: 2rem;
    left: 2rem;
    top: 0;
    transition: all 0.3s;
  }
  &:hover span {
    left: 1.5rem;
  }
`;
