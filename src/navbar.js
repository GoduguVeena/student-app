import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="navbar-brand" href="/">
        Student App
      </a>
      <div className="navbar-links">
        <a className="navbar-link" href="/">
          Home
        </a>
        <a className="navbar-link" href="#about">
          About
        </a>
      </div>
    </nav>
  );
}

export default Navbar;