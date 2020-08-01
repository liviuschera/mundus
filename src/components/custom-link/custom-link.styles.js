import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkEl = styled(Link)`
  /* display: block; */
  /* align-items: center;
  align-self: center; */
  /* height: 5rem; */
  vertical-align: middle;
  background-color: var(--elements-color);
  box-shadow: ${(props) =>
    props.button
      ? '0 0 0.3rem rgba(0, 0, 0, 0.3)'
      : '0 0 0.1rem rgba(0, 0, 0, 0.2)'};
  margin: ${(props) => (props.button ? '2rem 0 5rem 0' : '0.5rem')};
  border-radius: 0.3rem;
  padding: ${(props) => (props.button ? '0.2rem 2rem' : '0.3rem 1.5rem')};
  display: inline-block;
  border: none;
  line-height: 2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--background-color);
  }

  span {
    font-size: 2rem;
    /* line-height: 2rem; */
    padding: 0 0.5rem;
    /* vertical-align: middle; */
  }
`;
