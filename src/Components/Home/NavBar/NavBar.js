import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = () => {

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://uploads-ssl.webflow.com/6085a711abf4b461e288a56a/608923ff79dcaa4c75dcb808_Cosmofeed.png"
                        width="170"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}

                </Navbar.Brand>
            </Navbar>
        </>

    );
};

export default NavBar;