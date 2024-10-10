import React from "react";
const sizes = {
  '14': "text-[14px]",
  '16': "text-[16px]",
  '18': "text-[18px]",
  '20': "text-[20px]",
  '24': "text-xl md:text-[22px] xl:text-[24px]",
  '28': "text-[28px]",
  '32': "text-[32px]",
  '26': "text-[26px]",
};
const Heading = ({
  children,
  className = "",
  size = "headings",
  as,
  fontWeight,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-gray-900_01 ${className} ${sizes[size]}`}
      {...restProps}
      style={{fontWeight: `${fontWeight}`}}
    >
      {children}
    </Component>
  );
};
export { Heading };