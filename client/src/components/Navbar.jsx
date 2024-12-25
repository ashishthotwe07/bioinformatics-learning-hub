import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { FaHome, FaSearch, FaUserCircle, FaBriefcase, FaGraduationCap, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // To toggle the search bar on mobile
  const location = useLocation();
  const isLoggedIn = true; // Replace with actual authentication logic
  const username = "John Doe"; // Replace with actual user name

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle the search bar on mobile
  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when a menu item is clicked
  };

  return (
    <>
      <nav className="w-full px-4 py-4 mx-auto text-gray-900 bg-white shadow-lg flex items-center justify-between relative">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold text-gray-800 hover:text-blue-500 transition-all"
        >
          Bioinfo Academy
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-700">
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Search Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSearchBar} className="text-gray-700">
            <FaSearch className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex relative w-1/3 max-w-md">
          <input
            type="search"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search for learning resources, courses, or articles..."
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700"
            type="button"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Search Bar */}
        {isSearchBarVisible && (
          <div className="lg:hidden absolute top-16 left-0 w-full p-4 bg-white border-t border-gray-300">
            <input
              type="search"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search for learning resources, courses, or articles..."
            />
          </div>
        )}

        {/* Icons Section (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Courses */}
          <Link
            to="/courses"
            className="text-lg text-gray-700 hover:text-blue-500 transition-all"
            data-tooltip-id="tooltip-courses"
            data-tooltip-content="Courses"
          >
            <FaGraduationCap className="w-6 h-6" />
          </Link>

          {/* Job Notifications */}
          <Link
            to="/job-notifications"
            className="text-lg text-gray-700 hover:text-blue-500 transition-all"
            data-tooltip-id="tooltip-job-notifications"
            data-tooltip-content="Job Notifications"
          >
            <FaBriefcase className="w-6 h-6" />
          </Link>

          {/* Profile */}
          {isLoggedIn ? (
            <Link
              to="/user/profile"
              className="text-lg text-gray-700 hover:text-blue-500 transition-all"
              data-tooltip-id="tooltip-profile"
              data-tooltip-content="Profile"
            >
              <FaUserCircle className="w-6 h-6" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-lg text-gray-700 hover:text-blue-500 transition-all"
              data-tooltip-id="tooltip-login"
              data-tooltip-content="Login"
            >
              <FaUserCircle className="w-6 h-6" />
            </Link>
          )}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-yellow-400 z-10 shadow-md absolute w-full left-0 mt-2">
          <div className="flex flex-col items-start p-4 gap-4">
            <Link
              to="/courses"
              className="text-lg text-gray-700 hover:text-blue-500 transition-all"
              onClick={handleMenuItemClick} // Close menu on click
            >
              Courses
            </Link>
            <Link
              to="/job-notifications"
              className="text-lg text-gray-700 hover:text-blue-500 transition-all"
              onClick={handleMenuItemClick} // Close menu on click
            >
              Job Notifications
            </Link>
            <Link
              to="/user/profile"
              className="text-lg text-gray-700 hover:text-blue-500 transition-all"
              onClick={handleMenuItemClick} // Close menu on click
            >
              Profile
            </Link>
          </div>
        </div>
      )}

      {/* Tooltips */}
      <Tooltip id="tooltip-courses" />
      <Tooltip id="tooltip-job-notifications" />
      <Tooltip id="tooltip-profile" />
      <Tooltip id="tooltip-login" />

      {/* Main Outlet */}
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
