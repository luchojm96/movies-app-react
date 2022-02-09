import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../styles/layout/Header.styled';

export default function Navbar() {
  return (
    <Header>
      <Link to={'/'}>
        <span className="title">Movies App</span>
      </Link>
      <div className="flex-grow"></div>

      <div className="nav-wrapper">
        <Link to={'/peliculas'}>
          <span className="nav-link">Peliculas</span>
        </Link>
        <Link to={'/series'}>
          <span className="nav-link">Series</span>
        </Link>
        <div>
          <input type="search" placeholder="Buscar ..." />
          <button>buscar</button>
        </div>
      </div>
    </Header>
  );
}
