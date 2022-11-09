import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container container-fluid">
        <Link className="navbar-brand mb-0 h1" to="/">
          Dragon News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav align-items-sm-center">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            {user?.uid ? (
              <Link className="nav-link" onClick={userSignOut} to="/signin">
                Sign out
              </Link>
            ) : (
              <>
                <Link className="nav-link" to="/signup">Sign up</Link>
                <Link className="nav-link" to="/signin">Sign in</Link>
              </>
            )}
            <div className="d-sm-none">
              <LeftSideNav />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
