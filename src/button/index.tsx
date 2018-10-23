import React, { StatelessComponent } from "react";
import styled, { css } from "styled-components";
import { noop } from "lodash";
import { PrimaryPalette } from "../colors";
import { IconPosition } from "../enums";
import { Icon, IconProps } from "../icon/index";

export interface StyledIconProps {
  /**
   * Position of the icon - defaults to left
   */
  iconPosition?: IconPosition;
}

export interface ButtonProps extends StyledIconProps {
  /**
   * Inside text of the button, beside the icon
   */
  children: any;
  /**
   * You can pass aditional styling directly to the button
   */
  className?: string;
  /**
   * Should the button be filled with color (background and border)
   */
  filled?: boolean;
  /**
   * Should the button be dense with a smaller height
   */
  dense?: boolean;
  /**
   * Should the button be flat, no border or background
   */
  flat?: boolean;
  /**
   * @see [Icon](#icon) type.
   */
  icon?: string;
  /**
   * Should the button be disabled
   */
  disabled?: boolean;
  type?: string;
  /**
   * Function to call on click
   */
  onClick?: () => void;
}

const fillColor = PrimaryPalette.Teal;
const fillHoverColor = PrimaryPalette.Turquoise;
const fillDisabledColor = PrimaryPalette.Grey;
const disabledColor = PrimaryPalette.MidGrey;
const standardFocusColor = "#e4f2f2";

const StyledIcon = styled<StyledIconProps & IconProps>(Icon)`
  margin-right: ${(props: StyledIconProps) =>
    props.iconPosition === IconPosition.Left ? "10px" : "0"};
  margin-left: ${(props: StyledIconProps) =>
    props.iconPosition === IconPosition.Right ? "10px" : "0"};
`;

const StyledButton = styled<ButtonProps, "button">("button")`
  ${props => props.theme.global};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 88px;
  min-height: 40px;
  margin-right: 20px;
  padding: 9px 15px;
  border: 1px solid ${fillColor};
  border-radius: 2px;
  background: ${PrimaryPalette.White};
  color: ${fillColor};
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    background-color: ${standardFocusColor};
  }

  &:hover {
    border-color: ${fillHoverColor};
    background-color: ${fillHoverColor};
    color: ${PrimaryPalette.White};
  }

  &:disabled {
    border-color: ${fillDisabledColor};
    background-color: ${fillDisabledColor};
    color: ${disabledColor};
    cursor: not-allowed;
    pointer-events: none;
  }

  &:last-child {
    margin-right: 0;
  }

  ${props =>
    props.filled
      ? `
    border-color: ${fillColor};
    background-color: ${fillColor};
    color: ${PrimaryPalette.White};
    &:focus {
      background-color: ${fillColor};
      outline: ${fillColor} auto 5px;
    }
  `
      : ""};

  ${props => (props.dense ? "min-height: 32px;" : "")};

  ${props =>
    props.flat
      ? `
    border: none;
    border-color: initial;
    background-color: initial;
    color: ${PrimaryPalette.Turquoise};
    min-height: 35px;

    &:hover {
      color: ${PrimaryPalette.Teal};
      background-color: initial;
    }

    &:focus {
      background-color: initial;
    }

    &:disabled {
      background-color: initial;
      color: ${PrimaryPalette.Grey};
      cursor: not-allowed;
      pointer-events: none;
    }
  `
      : ""};
`;

/**
 * General purpose button.
 *
 * Any props not listed, will be passed directly to button.
 */
export const Button: StatelessComponent<ButtonProps> = ({
  children = null,
  className,
  filled = false,
  flat = false,
  dense = false,
  icon = null,
  iconPosition = IconPosition.Left,
  disabled = false,
  onClick = noop,
  ...restProps
}) => (
  <StyledButton
    onClick={onClick}
    filled={filled}
    dense={dense}
    flat={flat}
    className={className}
    disabled={disabled}
    {...restProps}
  >
    {icon && <StyledIcon type={icon} iconPosition={iconPosition} />}
    <div>{children}</div>
  </StyledButton>
);

export default Button;
