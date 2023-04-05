import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
          <Image
              src="/img/easelogo/whitetrans.png" // Replace with your logo image path
              alt="Logo"
              width={80}
              height={40}
              className={styles.logoImage}
            />
          </Link>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
          <li>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span>About</span>
              </Link>
            </li>
            <li className={styles.dropdown}
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}>
              <span>Services</span>
              <div
                className={`${styles.dropdownContent} ${
                  isDropdownOpen ? styles.show : ""
                }`}
              >
                <Link href="/services/creative">
                  <span>Creative</span>
                </Link>
                <Link href="/services/studio">
                  <span>Studio</span>
                </Link>
                <Link href="/services/zoom">
                  <span>Zoom</span>
                </Link>
              </div>
            </li>
            <li>
              <Link href="/project">
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className={`${styles.menuButton} ${isOpen ? styles.open : ""} ${
            isOpen ? styles.openToFront : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
