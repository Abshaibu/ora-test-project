"use client";
import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/logo-dark.svg';
import style from "./header.module.css";

const headerLinks = [
  { title: "about us", link: "/#about" },
  { title: "our products", link: "/#products" },
  { title: "contact us", link: "/#contact-us" },
];

const HeaderNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    document.body.style.overflow = toggleMenu ? "hiddden" : "auto";
  }, [toggleMenu]);

  return (
    <header className={`${style.header} ${toggleMenu ? style.mobileNavActive : ""}`}>
      <nav className={style.nav}>
        <Link href="/">
          <Image width={150} height={43} src={Logo.src} alt="logo" />
        </Link>
        <ul className={toggleMenu ? style.mobileNav : ""}>
          {headerLinks.map(({ title, link, externalLink }) => (
            <li key={title}>
              {externalLink ? (
                <a
                  className={style.activeBtn}
                  rel="noreferrer"
                  target="_blank"
                  href={link}
                >
                  {title}
                </a>
              ) : (
                <Link href={link} onClick={() => setToggleMenu((s) => !s)}>
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button
          className={toggleMenu ? style.rotateSvgPaths : ""}
          aria-label={toggleMenu ? "close menu" : "open menu"}
          type="button"
          onClick={() => setToggleMenu((s) => !s)}
        >
          <CgMenuLeft color="#2C3A47" size="2em" />
        </button>
      </nav>
    </header>
  );
};

export default HeaderNav;
