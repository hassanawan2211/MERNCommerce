import React from "react";
import logo from "../../assests/images/ESTYLOO.png";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center ">
              Due to <b>certain diseases</b> , order processing may experience
              slight delays.
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  {" "}
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2 ml-3 mr-3">
                <CountryDropdown />

                {/* search */}
                <div className="headerSearch  ">
                  <input type="text" />
                  <Button>
                    <IoSearch />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
