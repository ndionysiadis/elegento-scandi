import { connect } from 'react-redux';
import { changeNavigationState } from 'SourceStore/Navigation/Navigation.action';
import { NavigationType } from 'SourceStore/Navigation/Navigation.type';
import HeaderComponent from './Header.component';

const mapStateToProps = (state) => ({
    isMobileMenuOpen:
        state.NavigationReducer[NavigationType.TOP_NAVIGATION_TYPE].navigationState.name === 'menu',
    device: state.ConfigReducer.device,
    cartTotals: state.CartReducer.cartTotals,
    navigationState: state.NavigationReducer[NavigationType.TOP_NAVIGATION_TYPE].navigationState,
    productsInWishlist: state.WishlistReducer.productsInWishlist || {},
    isWishlistLoading: state.WishlistReducer.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: (isOpen) => {
        dispatch(
            changeNavigationState(NavigationType.TOP_NAVIGATION_TYPE, {
                name: isOpen ? 'menu' : 'closed',
                force: true,
            })
        );
    },
    onSearchOutsideClick: () => {},
    onSearchBarFocus: () => {},
    onSearchBarChange: () => {},
    onClearSearchButtonClick: () => {}
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);