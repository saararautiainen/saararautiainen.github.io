import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <Navbar className="justify-content-center header" sticky="top">
      <Link
        style={{ color: '#ff5e62', fontWeight: 'bolder' }}
        to="/"
        target="_blank"
        aria-label="Project Link"
        rel="noopener noreferrer"
      >
        Saara Rautiainen{' '}
      </Link>
    </Navbar>
  );
};

export default Header;
