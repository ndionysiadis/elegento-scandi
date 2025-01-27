import SourceHeader from 'SourceComponent/Header/Header.component';
import BurgerMenu from 'Component/BurgerMenu/BurgerMenu.component';
import Link from 'Component/Link';
import Logo from 'Component/Logo';
import { DEFAULT_STATE_NAME } from 'SourceComponent/NavigationAbstract/NavigationAbstract.config';
import media, { LOGO_MEDIA } from 'SourceUtil/Media/Media';
import './Header.override.style.scss';

export class HeaderComponent extends SourceHeader {
    static defaultProps = {
        ...SourceHeader.defaultProps,
        navigationState: {
            name: DEFAULT_STATE_NAME,
            isHiddenOnMobile: false
        },
        productsInWishlist: {},
        isWishlistLoading: false
    };

    renderLogoImage() {
        const { header_logo_src, logo_alt } = this.props;
        const logoSrc = header_logo_src ? media(header_logo_src, LOGO_MEDIA) : null;

        return (
            <Logo
                src={logoSrc}
                alt={logo_alt}
                title={logo_alt}
            />
        );
    }

    renderLogo(isVisible = false) {
        const { isMobileMenuOpen = false, toggleMobileMenu = () => {} } = this.props;

        return (
            <div block="Header" elem="LogoWrapper" mods={{ isVisible }}>
                <Link
                    to="/"
                    aria-label="Go to homepage by clicking on logo"
                    block="Header"
                    elem="LogoLink"
                >
                    {this.renderLogoImage()}
                </Link>
                <button
                    block="Header"
                    elem="BurgerIcon"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    ☰
                </button>
            </div>
        );
    }

    render() {
        const parent = super.render();
        const { isMobileMenuOpen, toggleMobileMenu } = this.props;

        return (
            <section block="Header" elem="Wrapper" mods={{ isHidden: isMobileMenuOpen }}>
                <header
                    block="Header"
                    mods={{ isHidden: isMobileMenuOpen }}
                >
                    {parent}
                </header>
                <BurgerMenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} />
            </section>
        );
    }
}

export default HeaderComponent;