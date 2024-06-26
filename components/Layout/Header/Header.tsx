import { useState, type ReactNode } from 'react';
import classes from './Header.module.scss';
import logo from '@/src/assets/icons/logo.webp';
import menuClose from '@/src/assets/icons/menuClose.svg';
import menuOpen from '@/src/assets/icons/menuOpen.svg';

const Header = ({ links }: { links?: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuState = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <a href="/">
          <img
            className={classes.logo}
            src={logo.src}
            alt="HR Startify logo, click to navigate to homepage."
          />
        </a>
        {isMenuOpen ? (
          <img
            className={classes.menuIcon}
            src={menuClose.src}
            alt="Click to close the navbar menu."
            onClick={handleMenuState}
          />
        ) : (
          <img
            className={classes.menuIcon}
            src={menuOpen.src}
            alt="Click to open the navbar menu."
            onClick={handleMenuState}
          />
        )}
        <nav className={classes.desktopLinks}>{links}</nav>
      </nav>

      <nav
        className={`${classes.mobileLinks} ${isMenuOpen ? classes.active : ''}`}
      >
        {links}
      </nav>
    </header>
  );
};

export default Header;
