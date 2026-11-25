import React from "react";

function Navbar() {

  return (

    <aside className="sidebar">

      <div className="logo">
        <h2>PulseWorks AI</h2>
      </div>

      <ul className="nav-links">

        <li className="active">
          Dashboard
        </li>

        <li>
          Projects
        </li>

        <li>
          Team
        </li>

        <li>
          Settings
        </li>

      </ul>

    </aside>

  );
}

export default Navbar;