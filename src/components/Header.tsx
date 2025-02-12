import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-yellow-400 text-white p-4 shadow-lg">
      <img
        src={require("../img/logo.png")}
        alt="logo company"
        className="w-24 h-auto"
      />
      <div className="flex gap-6 text-lg font-bold">
        <Link to="/page1" className="hover:text-yellow-600">
          Послуги
        </Link>
        <Link to="/page2" className="hover:text-yellow-600">
          Розробка
        </Link>
        <Link to="/page3" className="hover:text-yellow-600">
          Корпоративний сайт
        </Link>
      </div>
    </div>
  );
};

export default Header;
