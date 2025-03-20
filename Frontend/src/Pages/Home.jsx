import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Home = ({ token, adminToken }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-yellow-300 overflow-hidden">
      {/* Animated Card */}
      <div
        className={`flex flex-col gap-16 items-center bg-white/30 backdrop-blur-md p-12 rounded-2xl shadow-2xl w-[400px] transform transition-transform duration-700 ease ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <p className="italic text-gray-900 text-sm text-center">
            "A platform for employees and administrators"
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <NavLink
            to={token ? "/employee-dashboard" : "/employee-login"}
            className="bg-[#3E4095] text-white px-6 py-3 rounded-lg font-medium text-center shadow-md hover:bg-[#2c2e80] active:scale-95 transition transform"
          >
            Login As Employee
          </NavLink>
          <button
            onClick={() => {
              adminToken ? navigate("/admin-dashboard") : navigate("/admin-login");
            }}
            className="bg-[#3E4095] text-white px-6 py-3 rounded-lg font-medium text-center shadow-md hover:bg-[#2c2e80] active:scale-95 transition transform"
          >
            Login As Administrator
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
