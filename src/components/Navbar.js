/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglzmij2kpJ0PgDDJGZS6CnebD5HVIgO0MkXRPEjR8mUay7QltmsjAWdqzJiHjGTnE8iw"
                            alt="logo"
                        ></img>
                    </a>

                    <a
                        role="button"
                        class="navbar-burger"
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

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">Men</a>
                        <a class="navbar-item">Women</a>
                        <a class="navbar-item">Headwear</a>
                        <a class="navbar-item">Accessories</a>
                        <a class="navbar-item">Kids</a>
                        <a class="navbar-item">Sale</a>
                        <a class="navbar-item">About</a>
                        <a class="navbar-item">Journal</a>
                    </div>

                    <div class="navbar-end">
                        <a class="navbar-item">Search</a>
                        <Link to="cart" class="navbar-item">
                            Cart
                        </Link>
                        <a class="navbar-item">Sign In</a>
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
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
