import React from "react";

import Logo from "../../assets/logo/logo-white.png";

function Header() {
  return (
    <header className="shadow-sm bg-[#003637] absolute top-0 left-0 right-0 z-10">
      <nav className="max-w-[992px] mx-auto">
        <div className="w-[86px]">
          <img
            src={Logo}
            alt="Color Generator logo"
            className="cursor-pointer object-cover"
            title="Color Generator"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
