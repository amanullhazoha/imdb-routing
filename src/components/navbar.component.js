import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header id="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                        IMDb
                    </Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies">
                                    Movies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addMovie">
                                    Add Movie
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link className="nav-link" to="/singIn">
                                Sing Up
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
