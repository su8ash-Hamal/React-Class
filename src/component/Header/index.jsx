import React from "react";
import "./header.css";
import { CiDesktop, CiMobile1 } from "react-icons/ci";

const Header = () => {
  return (
    <div className="mainClass">
      <div className="logo-container">
        <div className="logo">WIX</div>
        <div>
          <div>
            <CiDesktop className="icon" />
            <CiMobile1 className="icon" />
          </div>
        </div>
      </div>
      <div className="other-container">
        <p>Click edit and create your own amazing website</p>
        <a href="#">Read More</a>
        <a
          href="https://manage.wix.com/edit-template/from-intro?originTemplateId=edc05836-11a9-4b85-bb3c-bc8a81b52fb8&amp;editorSessionId=ffc17f2e-5fdb-451b-9cf6-565ab72954cc"
          target="_blank"
        >
          Edit this site
        </a>
      </div>
    </div>
  );
};

export default Header;
