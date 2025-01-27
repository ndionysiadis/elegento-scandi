import React from 'react';
import PropTypes from 'prop-types';
import './BurgerMenu.style.scss';

/**
 * @namespace Component/BurgerMenu/Component
 */
export const BurgerMenu = ({isOpen, closeMenu}) => {
    const logoSrc = '/images/fixed_logo.png';

    return (
        <div className={`BurgerMenu ${isOpen ? 'BurgerMenu_isOpen' : ''}`}>
            <div
                className="BurgerMenu-Overlay"
                onClick={() => closeMenu(false)}
                onKeyDown={() => closeMenu(false)}
                role="button"
                tabIndex={0}
            />
            <div className="BurgerMenu-Drawer">
                <div className="BurgerMenu-Header">
                    <img
                        src={logoSrc}
                        alt="Logo"
                        className="BurgerMenu-Logo"
                        aria-label="Go to homepage by clicking on logo"
                    />
                    <button
                        className="BurgerMenu-CloseButton"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeMenu();
                        }}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>

                <nav>
                    <ul>
                        <a href="#">Smartphones & Gadgets</a>
                        <a href="#">Laptops and Computers</a>
                        <a href="#">Household appliances</a>
                        <a href="#">TV, audio, photo, video</a>
                        <a href="#">Kitchen Appliances</a>
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