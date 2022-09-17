import { css } from "styled-components";

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 450px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
    return css`
    @media only screen and (min-width: 380px) and (max-width:768px) {
      ${props}
    }
  `;
};