import React, { StatelessComponent, CSSProperties } from "react";

export interface IconProps {
  /**
   * Icon type. See [Font Awesome](https://fontawesome.com/)
   * for a list of icon types
   */
  type: string;
  /** Additional classes */
  className?: string;
  /** FA prefix */
  prefix?: string;
  /** Styles added inline to the icon */
  style?: CSSProperties;
  /** Function to call on click */
  onClick?(): void;
}

export const Icon: StatelessComponent<IconProps> = ({
  type,
  style,
  className,
  onClick,
  prefix
}) => {
  const iconClass = `${prefix ? prefix : "fas"} fa-${type}`;
  return (
    <i
      className={`${iconClass} ${className}`}
      style={style}
      onClick={() => onClick && onClick()}
    />
  );
};

export default Icon;
