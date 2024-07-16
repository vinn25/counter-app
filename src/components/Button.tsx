import React from "react";

const Button = ({ handler, children }: any) => {
  return (
    <button className="px-5" onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
