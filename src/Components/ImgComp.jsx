import React from "react";

const Img = ({
  className,
  src = "defaultNodata.png",
  alt = "textImg",
  ...restProps
}) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
