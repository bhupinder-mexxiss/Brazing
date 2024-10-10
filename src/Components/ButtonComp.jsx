import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-lg",
};
const variants = {
  fill: {
    deep_orange_900: "bg-deep_orange-900 text-white-a700",
    white_A700: "bg-white-a700 text-deep_orange-900",
  },
};
const sizes = {
  md: "h-[44px] px-[18px] text-[16px]",
  lg: "h-[52px] px-5 text-[18px]",
  sm: "h-[36px] px-[34px] text-[14px]",
  xs: "h-[12px]",
};
const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["md", "lg", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_orange_900", "white_A700"]),
};
export { Button };
