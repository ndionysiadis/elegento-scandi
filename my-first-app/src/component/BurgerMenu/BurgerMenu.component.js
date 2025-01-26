import React from 'react';
import PropTypes from 'prop-types';
import './BurgerMenu.style.scss';

/**
 * @namespace Component/BurgerMenu/Component
 */
export const BurgerMenu = ({ isOpen, closeMenu }) => {

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
                <button
                    className="BurgerMenu-CloseButton"
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log('Close button clicked!');
                        closeMenu();
                    }}
                    aria-label="Close menu"
                >
                    ×
                </button>
                <nav>
                    <ul>
                        <li><a href="#">Smartphones & Gadgets</a></li>
                        <li><a href="#">Laptops and Computers</a></li>
                        <li><a href="#">Household appliances</a></li>
                        <li><a href="#">TV, audio, photo, video</a></li>
                        <li><a href="#">Kitchen Appliances</a></li>
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