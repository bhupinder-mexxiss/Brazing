import React from "react";
const sizes = {
  textxs: "text-[14px] font-normal not-italic",
  texts: "text-[16px] font-normal not-italic",
  textmd: "text-[18px] font-normal not-italic",
  textlg: "text-[20px] font-normal not-italic md:text-[22px]",
  textxl: "text-[28px] font-normal not-italic md:text-[26px] sm:text-[24px]",
  text2x1: "text-[40px] font-normal not-italic md:text-[38px] sm:text-[36px]",
};
const Text = ({
  children,
  className = "",
  size = "textxs",
  as,
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component
      className={` ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };
