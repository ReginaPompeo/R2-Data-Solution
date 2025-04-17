'use client'

import React, { useState } from 'react';
import styles from './navbar.module.scss';
import Image from 'next/image';
import Logo from '../../public/logo-r2.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src={Logo} alt="Logo" className={styles.logo} />
      </div>

      {/* HAMBURGUER: visível só quando menu está fechado */}
      {!menuOpen && (
        <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}

      {/* MENU MOBILE: visível só se aberto */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>❌</button>
          <nav className={styles.mobileNavLinks}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Início</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Serviços</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Equipe</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
        </div>
      )}

      {/* Links visíveis apenas em telas grandes */}
      <div className={styles.navLinks}>
        <a href="#home">Início</a>
        <a href="#about">Sobre</a>
        <a href="#services">Serviços</a>
        <a href="#team">Equipe</a>
        <a href="#contact">Contato</a>
      </div>
    </div>
  );
}
