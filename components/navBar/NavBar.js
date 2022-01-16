import React from "react";
import Link from "next/link";
import { routes } from "../../Routes/routes";
import styles from "../../styles/navbar.module.css";

const NavBar = () => {
  return (
    <div className={`${styles.navbarContainer} bg-slate-50`}>
      <ul className={`flex items-center justify-center `}>
        {routes.map((route, key) => (
          <li key={key} className='mx-9 my-3 '>
            <Link href={route.link}>
              <a>
                <div className={`${styles.navLink} text-center text-black`}>
                  {route.icon}
                </div>
                <div className={`${styles.routeName} mt-2 text-black`}>
                  {route.name}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
