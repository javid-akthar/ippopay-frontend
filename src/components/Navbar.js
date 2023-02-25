import {navbarTitleStle, navBarStyleOBj, navBarHeight} from './NavbarStyleComponent';

function Navbar(props) {

  return (
    <div style={navBarHeight}>
      <nav className="navbar navbar-light" style={navBarStyleOBj}>
        <span className="navbar-brand mb-0 h1" style={navbarTitleStle}>
          ippopay
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
