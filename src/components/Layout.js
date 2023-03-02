import * as React from 'react';
import {ReactComponent as Logo} from '../assets/images/logo.svg';
import {ReactComponent as IconSwim} from '../assets/images/person-swimming-solid.svg';
import {ReactComponent as IconBiking} from '../assets/images/person-biking-solid.svg';
import {ReactComponent as IconDumbbell} from '../assets/images/dumbbell-solid.svg';
import {ReactComponent as IconPerson} from '../assets/images/Group.svg';
import styles from '../assets/styles/Layout.module.css'
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return (
    <>
        <header className = {styles.flexRow}>
          <div className = {styles.logoContainer}>
          <Logo className = {styles.logo}/>
          </div>
          <nav className = {styles.nav}>
            <NavLink to="/" className = {styles.navItem}>
              Acceuil
            </NavLink>
            <NavLink to="/" className = {styles.navItem}>
              Profil
            </NavLink>
            <NavLink to="/" className = {styles.navItem}>
              Réglage
            </NavLink>
            <NavLink to="/" className = {styles.navItem}>
              Communauté
            </NavLink>
          </nav>
        </header>
        <main>
            <nav className={styles.sideBar}>
            <div className = {styles.iconContainer} style={{marginTop: '256px'}}>
            <IconPerson className = {styles.icon} />
            </div>
            <div className = {styles.iconContainer}>
            <IconSwim className = {styles.icon} />
            </div>
            <div className = {styles.iconContainer}> 
            <IconBiking className = {styles.icon} />
            </div>
            <div className = {styles.iconContainer} style={{marginBottom: '220px'}}>
            <IconDumbbell className = {styles.icon} />
            </div>
            <span className = {styles.copyright}>Copyright, SportSee 2020</span>
            </nav>
            <section>
            <Outlet />
            </section>
        </main>
    </>
    );
  };

export default Layout