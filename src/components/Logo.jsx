import React from 'react';
import logoImage from "../assets/logo.png";

function Logo() {
  return (
    <img
      src={logoImage}
      alt="Logo"
      className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32"
    />
  );
}

export default Logo;
