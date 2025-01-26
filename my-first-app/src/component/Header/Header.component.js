import SourceHeader from 'SourceComponent/Header/Header.component';
import BurgerMenu from 'Component/BurgerMenu/BurgerMenu.component';
import './Header.override.style.scss';
export class HeaderComponent extends SourceHeader {
    renderLogo() {
        const { isMobileMenuOpen, toggleMobileMenu } = this.props;

        return (
            <div block="Header" elem="LogoWrapper">
                <a href="/" block="Header" elem="Logo">App Logo</a>
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
        const { isMobileMenuOpen, toggleMobileMenu } = this.props;
        console.log('Rendering HeaderComponent with isMobileMenuOpen:', isMobileMenuOpen); // Logs on render
        return (
            <header block="Header">
                {this.renderLogo()}
                <BurgerMenu isOpen={isMobileMenuOpen} closeMenu={toggleMobileMenu} />
            </header>
        );
    }
}

export default HeaderComponent;