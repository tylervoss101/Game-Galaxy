import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HomeButton.scss";
/**
 * HomeButton Component
 *
 * Home button icon navigates you back home
 *
 * @returns {JSX.Element}
 */
const HomeButton = () => {
  return (
    <>
      <div>
        <Link className="home-button-link" to="/">
          <FaHome className="home-button" />
        </Link>
      </div>
    </>
  );
};

export default HomeButton;
