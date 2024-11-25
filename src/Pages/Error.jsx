import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-BgColor">
      
      <div className="text-center">
        <h1 className="text-4xl text-SecondTextColor font-bold mb-4">404</h1>
        <p className="text-xl mb-4 text-TextColor">Page Not Found</p>
        <a href="/" className="text-MainColor underline">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
