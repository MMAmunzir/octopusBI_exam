import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-15 bg-blue-950 mb-10 flex text-white items-center gap-5 justify-center">
      <Link to="/Home-customer">Home</Link>
      <Link to="/">Logout</Link>
    </div>
  );
};

export default Header;
