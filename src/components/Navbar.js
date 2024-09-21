import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../providers/SearchProvider';

function Navbar() {
    const [isSearchVisible] = useState(true);
    const { setSearchQuery } = useSearch();

    return (
        <>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item">
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
                        <Link to="cart" className="navbar-item">
                            Cart
                        </Link>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
