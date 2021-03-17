import React, { useEffect, useState } from "react";
import { Link } from 'gatsby';
import '../styles/nav.scss'

const Nav = () => {

  const [navStatus, setNavStatus] = useState("");


  useEffect(() => {
    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    // console.log("test!")
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
          || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
          || (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          // console.log("show!")
          setNavStatus("nav-show");
        } else {
          // console.log("hide!")
          setNavStatus("nav-hide");
        }
        prevScrollpos = currentScrollPos;
      }
    }
  });

  return (
      <nav className={navStatus}>
        <Link activeClassName="nav-active" className="nav-left" to="/">Home</Link>
        <ul className="nav-right">

          <Link activeClassName="nav-active" to="/livestream">Livestream</Link>
          <Link activeClassName="nav-active" to="/hubs">Hubs</Link>
          <Link activeClassName="nav-active" to="/team">Team</Link>
          <a activeClassName="nav-active" target="_blank" href="https://society6.com/momelove">Store</a>
        </ul>
      </nav>
  );
};
export default Nav;
