import { StatelessComponent } from "react";
export interface ButtonProps {
    /** Inside text of the button, beside the icon */
    children: any;
    /** You can pass aditional styling directly to the button */
    className?: string;
    /** Should the button be filled with color (background and border) */
    filled?: boolean;
    /** Should the button be dense with a smaller height */
    dense?: boolean;
    /** Should the button be flat, no border or background */
    flat?: boolean;
    /** @see [Icon](#icon) type. */
    icon?: string;
    /** Should the button be disabled */
    disabled?: boolean;
    type?: string;
    /** Function to call on click */
    onClick?: () => void;
}
/**
 * General purpose button.
 *
 * Any props not listed, will be passed directly to button.
 */
export declare const Button: StatelessComponent<ButtonProps>;
export default Button;
