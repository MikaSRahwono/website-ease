// Navbar.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
          <Image
              src="https://firebasestorage.googleapis.com/v0/b/website-ease.appspot.com/o/img%2Feaselogo%2Fblacktrans.png?alt=media&token=63f4aeed-6774-4b75-9504-f984ecd93ef9" // Replace with your logo image path
              alt="Logo"
              width={28}
              height={28}
              className={styles.logoImage}
            />
          </Link>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
          <li>
              <Link href="/">
              <span onClick={() => closeMenu("/")}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
              <span onClick={() => closeMenu("/about")}>About</span>
              </Link>
            </li>
              <li className={`${styles.dropdown} ${isDropdownOpen ? styles.show : ""}`}
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}>
                <span>Services</span>
                <span className={styles.dropdownIcon}></span>
                <div
                  className={`${styles.dropdownContent} ${
                    isDropdownOpen ? styles.show : ""
                  }`}
                >
                <Link href="/services/creative">
                  <span onClick={() => closeMenu("/services/creative")}>Creative</span>
                </Link>
                <Link href="/services/studio">
                  <span onClick={() => closeMenu("/services/studio")}>Studio</span>
                </Link>
                <Link href="/services/zoom">
                  <span onClick={() => closeMenu("/services/zoom")}>Zoom</span>
                </Link>
              </div>
            </li>
            <li>
              <Link href="/project?sort=all">
                <span onClick={() => closeMenu("/project?sort=all")}>Project</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span onClick={() => closeMenu("/contact")}>Contact</span>
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
