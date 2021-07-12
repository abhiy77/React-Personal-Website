import React, { useState, useEffect } from 'react';
//import { Button } from '@material-ui/core/Button/Button';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsPersonSquare } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { makeStyles } from '@material-ui/core/styles';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);

  const useStyles = makeStyles({
    navbar: {
      background: '#1c2237',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
      position: 'sticky',
      top: 0,
      zIndex: 999
    },
    navbarContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '80px'
    },
    container: {
      zIndex: 1,
      width: '100%',
      maxWidth: '1300px',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingRight: '50px',
      paddingLeft: '50px'
    },
    navbarLogo: {
      color: '#fff',
      justifySelf: 'start',
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '2rem',
      display: 'flex',
      alignItems: 'center'
    },
    navbarIcon: {
      marginRight: '0.5rem'
    },
    navMenu: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      listStyle: 'none',
      textAlign: 'center',
      justifyContent: 'end'
    },
    navItem: {
      height: '80px',
      borderBottom: '2px solid transparent',
      '&:hover': {
        borderBottom: '2px solid #f00946'
      }
    },
    navLinks: {
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      height: '100%',
    },
    faBars: {
      color: '#fff'
    },
    menuIcon: {
      display: 'none'
    },
    active: {
      borderBottom: '2px solid #f00946'
    }

  });

  const styles = useStyles();

  return (

    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={styles.navbar}>
          <div className={`${styles.navbarContainer} ${styles.container}`}>
            <NavLink to='/' className={styles.navbarLogo} onClick={closeMobileMenu} >
              <BsPersonSquare className={styles.navbarIcon} />
              PERSONAL BLOG
            </NavLink>
            <div className={styles.menuIcon} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={styles.navMenu}>
              
              <li className={styles.navItem}>
                <NavLink to='/home' className={styles.navLinks} onClick={closeMobileMenu} activeClassName={styles.active}>
                  Home
                </NavLink>
              </li>
              <li className={styles.navItem} >
                <NavLink
                  to='/about'
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                  activeClassName={styles.active}
                >
                  About
                </NavLink>
              </li>
              
              <li className={styles.navItem}>
                <NavLink
                  to='/contact'
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                  activeClassName={styles.active}
                >
                  Contact
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to='/gallery'
                  className={styles.navLinks}
                  onClick={closeMobileMenu}
                  activeClassName={styles.active}
                >
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
