import styled, { css } from 'styled-components';
import { CollectionItemContainer } from '../collection_item/collection_item.styles';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #3166bb;
    border: none;
  }
`;

const isFooterPositioned = css`
  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }

  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const getButtonStyles = props => {
  let styles = [];
  if (props.isGoogleSignIn) {
    styles.push(googleSignInStyles);
  }

  if (props.footer) {
    styles.push(isFooterPositioned);
  }

  if (props.inverted) {
    styles.push(invertedButtonStyles);
  }

  return [buttonStyles, ...styles];
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;
