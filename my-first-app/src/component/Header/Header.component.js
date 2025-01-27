import SourceHeader from 'SourceComponent/Header/Header.component';
import BurgerMenu from 'Component/BurgerMenu/BurgerMenu.component';
import Link from 'SourceComponent/Link';
import Logo from 'SourceComponent/Logo';
import media, { LOGO_MEDIA } from 'SourceUtil/Media/Media';
import './Header.override.style.scss';

export class HeaderComponent extends SourceHeader {
    static defaultProps = {
        ...SourceHeader.defaultProps,
        navigationState: {
            name: '',
            isHiddenOnMobile: false,
        },
    };

    renderLogoImage() {
        const { header_logo_src, logo_alt } = this.props;
        const logoSrc = header_logo_src ? media(header_logo_src, LOGO_MEDIA) : null;

        return (
            <Logo
                src={logoSrc}
                alt={logo_alt || 'Logo'}
                title={logo_alt || 'Logo'}
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

                <Link
                    to="/"
                    aria-label="Go to homepage by clicking on logo"
                    block="Header"
                    elem="LogoLink"
                >
                    {this.renderLogoImage()}
                </Link>

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