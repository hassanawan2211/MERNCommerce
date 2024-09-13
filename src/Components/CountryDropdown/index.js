import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";

const CountryDropdown = () => {
  return (
    <Button className="countryDrop d-flex justify-content-between align-items-center">
      <div className="info d-flex flex-column">
        <span className="lable"> Your Location</span>
        <span className="name">Pakistan</span>
      </div>
      <span className="ml-auto">
        <FaAngleDown />
      </span>
    </Button>
  );
};

export default CountryDropdown;
