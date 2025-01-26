import React from 'react';
import PropTypes from 'prop-types';
import './BurgerMenu.style.scss';

/**
 * @namespace Component/BurgerMenu/Component
 */
export const BurgerMenu = ({ isOpen, closeMenu }) => {
    console.log('BurgerMenu isOpen:', isOpen); // Add this to debug the isOpen prop
    console.log('BurgerMenu closeMenu function:', closeMenu); // Check the function is passed correctly

    return (
        <div className={`BurgerMenu ${isOpen ? 'BurgerMenu_isOpen' : ''}`}>
            <div
                className="BurgerMenu-Overlay"
                onClick={closeMenu}
                onKeyDown={closeMenu}
                role="button"
                tabIndex={0}
            />
            <div className="BurgerMenu-Drawer">
                <button
                    className="BurgerMenu-CloseButton"
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    ×
                </button>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
};

export default BurgerMenu;