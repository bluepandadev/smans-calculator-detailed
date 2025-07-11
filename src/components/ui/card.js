import React from "react";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={`bg-white ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent }; 