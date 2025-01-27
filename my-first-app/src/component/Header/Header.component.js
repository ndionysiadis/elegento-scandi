import React from 'react';
import SourceHeader from 'SourceComponent/Header/Header.component';
import BurgerMenu from 'Component/BurgerMenu/BurgerMenu.component';
import './Header.override.style.scss';

export class HeaderComponent extends SourceHeader {
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
        const { isMobileMenuOpen, toggleMobileMenu } = this.props;

        return (
            <section block="Header" elem="Wrapper" mods={{ isMobileMenuOpen }}>
                <header
                    block="Header"
                    mods={{ isHidden: isMobileMenuOpen }}
                    aria-hidden={isMobileMenuOpen}
                >
                    {super.render()}
                </header>
                <BurgerMenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} />
            </section>
        );
    }
}

export default HeaderComponent;