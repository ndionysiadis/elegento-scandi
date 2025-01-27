import React from 'react';
import PropTypes from 'prop-types';
import SourceHeader from 'SourceComponent/Header/Header.component';
import BurgerMenu from 'Component/BurgerMenu/BurgerMenu.component';
import './Header.override.style.scss';

export class HeaderComponent extends SourceHeader {
    static propTypes = {
        ...SourceHeader.propTypes,
        isMobileMenuOpen: PropTypes.bool.isRequired,
        toggleMobileMenu: PropTypes.func.isRequired,
        menu: PropTypes.object,
    };

    static defaultProps = {
        ...SourceHeader.defaultProps,
        menu: {},
    };

    renderLogoImage() {
        const logoSrc = '/images/fixed_logo.png';
        return (
            <img
                src={logoSrc}
                alt="Logo"
                title="Logo"
            />
        );
    }

    renderLogo(isVisible = true) {
        const { isMobileMenuOpen, toggleMobileMenu } = this.props;
        return (
            <div block="Header" elem="LogoWrapper" mods={{ isVisible }}>
                <button
                    block="Header"
                    elem="BurgerIcon"
                    onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    ☰
                </button>
                <a
                    href="/"
                    aria-label="Go to homepage by clicking on logo"
                    block="Header"
                    elem="LogoLink"
                >
                    {this.renderLogoImage()}
                </a>
            </div>
        );
    }

    render() {
        const { isMobileMenuOpen, toggleMobileMenu, menu } = this.props;

        return (
            <section block="Header" elem="Wrapper" mods={{ isMobileMenuOpen }}>
                <header
                    block="Header"
                    mods={{ isHidden: isMobileMenuOpen }}
                    aria-hidden={isMobileMenuOpen}
                >
                    {super.render()}
                </header>
                <BurgerMenu
                    isOpen={isMobileMenuOpen}
                    closeMenu={toggleMobileMenu}
                    menu={menu}
                />
            </section>
        );
    }
}

export default HeaderComponent;