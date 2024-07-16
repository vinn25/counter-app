import React from "react";

const Button = ({ handler, children }: any) => {
  return <button onClick={handler}>{children}</button>;
};

export default Button;
