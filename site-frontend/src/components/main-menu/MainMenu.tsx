import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import burger from '../../images/burger.png';
import kvadrat from '../../images/kvadrat2.png';

import './MainMenu.css';

export function MainMenu() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const wrapperRef = useRef<HTMLElement | null>(null);

  const toggle = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const hideBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        hideBurgerMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const links = [
    { to: '/', text: 'О подкасте' },
    { to: '/partnership', text: 'Партнерство' },
    { to: '/subscribe', text: 'Подписаться' },
    { to: '/episodes', text: 'Выпуски' },
  ];

  return (
    <nav className="AppNav" ref={wrapperRef}>
      <img className="burger" src={burger} alt="" onClick={toggle} />

      <ul className={isBurgerMenuOpen ? 'burger-open' : 'burger-closed'}>
        {links.map((link) => (
          <li key={link.text}>
            <Link onClick={hideBurgerMenu} to={link.to}>
              <img src={kvadrat} alt="" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
