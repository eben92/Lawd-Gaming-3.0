import { useState, useEffect } from "react";
import Link from "next/link";
import { routes } from "../../Routes/routes";
import styles from "../../styles/navbar.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className={`${styles.navbarContainer} bg-slate-50`}>
      <ul className={`flex items-center justify-center `}>
        {routes.map((route, key) => (
          <li
            key={key}
            className='mx-7 mt-3 text-red-500'
            // onClick={(e) => {
            //   if (typeof window !== "undefined") {
            //     let slideAnimation = document.querySelector(".indicator");
            //     console.log(slideAnimation);
            //     const indicator = (e) => {
            //       slideAnimation.style.left = e.offsetLeft - 23 + "px";
            //       // slideAnimation.style.width = e.offsetWidth + "px";
            //     };
            //     indicator(e.currentTarget);
            //   }
            // }}
          >
            <Link href={route.link}>
              <a
                className={
                  router.pathname === route.link ? "active" : "inactive"
                }
                onClick={(e) => console.log(e.currentTarget)}
              >
                <div className={`${styles.navIcon} text-center navIcon`}>
                  {route.icon}
                </div>
                <div className={`${styles.routeName} text-black routeName`}>
                  {route.name}
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Indicator /> */}
      {/* <div className={`indicator`}></div> */}
    </div>
  );
};

export default NavBar;
