import React from "react";
import styled from "styled-components";

export default ({ color, name }) => (
  <ColorSquare>
    <Square color={color} />
    <p>{color}</p>
    <p>
      PrimaryPalette.
      {name}
    </p>
  </ColorSquare>
);

export const ColorsContainer = styled.div`
  display: flex;
`;

const Square = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${props => props.color};
`;

const ColorSquare = styled.div``;
