var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from "react";
import styled from "styled-components";
import { noop } from "lodash";
import { GeneralColor } from "../colors";
var fillColor = GeneralColor.Teal;
var fillHoverColor = GeneralColor.Turquoise;
var fillDisabledColor = GeneralColor.Grey;
var disabledColor = GeneralColor.MidGrey;
var standardFocusColor = "#e4f2f2";
var StyledButton = styled("button")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 88px;\n  min-height: 40px;\n  margin-right: 20px;\n  padding: 9px 15px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  background: ", ";\n  color: ", ";\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  &:focus {\n    background-color: ", ";\n  }\n\n  &:hover {\n    border-color: ", ";\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    border-color: ", ";\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  ", ";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 88px;\n  min-height: 40px;\n  margin-right: 20px;\n  padding: 9px 15px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  background: ", ";\n  color: ", ";\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  &:focus {\n    background-color: ", ";\n  }\n\n  &:hover {\n    border-color: ", ";\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    border-color: ", ";\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  ",
    ";\n\n  ", ";\n\n  ",
    ";\n"])), function (props) { return props.theme.global; }, fillColor, GeneralColor.White, fillColor, standardFocusColor, fillHoverColor, fillHoverColor, GeneralColor.White, fillDisabledColor, fillDisabledColor, disabledColor, function (props) {
    return props.filled
        ? "\n    border-color: " + fillColor + ";\n    background-color: " + fillColor + ";\n    color: " + GeneralColor.White + ";\n    &:focus {\n      background-color: " + fillColor + ";\n      outline: " + fillColor + " auto 5px;\n    }\n  "
        : "";
}, function (props) { return (props.dense ? "min-height: 32px;" : ""); }, function (props) {
    return props.flat
        ? "\n    border: none;\n    border-color: initial;\n    background-color: initial;\n    color: " + GeneralColor.Turquoise + ";\n    min-height: 35px;\n\n    &:hover {\n      color: " + GeneralColor.Teal + ";\n      background-color: initial;\n    }\n\n    &:focus {\n      background-color: initial;\n    }\n\n    &:disabled {\n      background-color: initial;\n      color: " + GeneralColor.Grey + ";\n      cursor: not-allowed;\n      pointer-events: none;\n    }\n  "
        : "";
});
/**
 * General purpose button.
 *
 * Any props not listed, will be passed directly to button.
 */
export var Button = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, className = _a.className, _c = _a.filled, filled = _c === void 0 ? false : _c, _d = _a.flat, flat = _d === void 0 ? false : _d, _e = _a.dense, dense = _e === void 0 ? false : _e, _f = _a.icon, icon = _f === void 0 ? null : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.onClick, onClick = _h === void 0 ? noop : _h, restProps = __rest(_a, ["children", "className", "filled", "flat", "dense", "icon", "disabled", "onClick"]);
    return (React.createElement(StyledButton, __assign({ onClick: onClick, filled: filled, dense: dense, flat: flat, className: className, disabled: disabled }, restProps),
        React.createElement("div", null, children)));
};
export default Button;
var templateObject_1;
