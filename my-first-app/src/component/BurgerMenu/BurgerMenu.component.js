import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BurgerMenu.style.scss';

const MenuItem = ({ item, level = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = item.children && Object.keys(item.children).length > 0;

    const toggleExpand = (e) => {
        if (hasChildren) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
            console.log('Toggled Expansion:', item.title, isExpanded);
        }
    };

    return (
        <div className={`BurgerMenu-Item level-${level}`}>
            <div className="BurgerMenu-ItemWrapper">
                <a
                    href={item.url || '#'}
                    className={`BurgerMenu-Link level-${level}`}
                    onClick={toggleExpand}
                >
                    {item.title}
                </a>
                {hasChildren && (
                    <button
                        className={`BurgerMenu-ExpandButton ${isExpanded ? 'isExpanded' : ''}`}
                        onClick={toggleExpand}
                        aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    >
                        <span className="BurgerMenu-ExpandIcon">›</span>
                    </button>
                )}
            </div>
            {hasChildren && (
                <ul className={`BurgerMenu-SubMenu ${isExpanded ? 'isExpanded' : ''}`}>
                    {Object.values(item.children).map((child) => (
                        <MenuItem key={child.id} item={child} level={level + 1} />
                    ))}
                </ul>
            )}
        </div>
    );
};

const BurgerMenu = ({ isOpen, closeMenu, menu }) => {
    return (
        <div className={`BurgerMenu ${isOpen ? 'BurgerMenu_isOpen' : ''}`}>
            <div
                className="BurgerMenu-Overlay"
                onClick={() => closeMenu(false)}
                role="button"
                tabIndex={0}
            />
            <div className="BurgerMenu-Drawer">
                <div className="BurgerMenu-Header">
                    <img
                        src="/images/fixed_logo.png"
                        alt="Logo"
                        className="BurgerMenu-Logo"
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
                <nav className="BurgerMenu-Nav">
                    <ul className="BurgerMenu-Menu">
                        {Object.values(menu).map((item) => (
                            <MenuItem key={item.id} item={item} />
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
        children: PropTypes.object,
    }).isRequired,
    level: PropTypes.number,
};

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeMenu: PropTypes.func.isRequired,
    menu: PropTypes.object,
};

BurgerMenu.defaultProps = {
    menu: {},
};

export default BurgerMenu;