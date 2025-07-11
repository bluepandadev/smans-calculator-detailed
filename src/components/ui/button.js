import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button }; 