import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../providers/SearchProvider';

function Navbar() {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const { setSearchQuery } = useSearch();
    // Toggle the search bar visibility
    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglzmij2kpJ0PgDDJGZS6CnebD5HVIgO0MkXRPEjR8mUay7QltmsjAWdqzJiHjGTnE8iw"
                            alt="logo"
                        />
                    </a>

                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start"></div>

                    <div className="navbar-end">
                        {isSearchVisible && (
                            <div className="navbar-item">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Search..."
                                    autoFocus
                                    onChange={(e)=>setSearchQuery(e.target.value)}
                                />
                            </div>
                        )}
                        <a className="navbar-item" onClick={toggleSearch}>
                            Search
                        </a>
                        <Link to="cart" className="navbar-item">
                            Cart
                        </Link>
                        <a className="navbar-item">Sign In</a>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Create Account</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
