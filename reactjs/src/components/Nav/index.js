import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
   return (
      <React.Fragment>
         <nav className="navbar">
            <Link to="/" className="navbar__brand">
               HACKER NEWS
            </Link>

            <ul>
               <li>
                  <Link to="/newest" className="link-menu">
                     newest
                  </Link>
               </li>

               <li>
                  <Link to="/show" className="link-menu">
                     show
                  </Link>
               </li>
               <li>
                  <Link to="/jobs" className="link-menu">
                     jobs
                  </Link>
               </li>
            </ul>
         </nav>
      </React.Fragment>
   );
}
