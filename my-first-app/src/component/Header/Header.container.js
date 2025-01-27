import { connect } from 'react-redux';
import { changeNavigationState } from 'SourceStore/Navigation/Navigation.action';
import { NavigationType } from 'SourceStore/Navigation/Navigation.type';
import MenuQuery from 'SourceQuery/Menu.query';
import DataContainer from 'SourceUtil/Request/DataContainer';
import MenuHelper from 'SourceUtil/Menu';
import HeaderComponent from './Header.component';

const mapStateToProps = (state) => ({
    isMobileMenuOpen:
        state.NavigationReducer[NavigationType.TOP_NAVIGATION_TYPE].navigationState.name === 'menu',
    device: state.ConfigReducer.device,
    cartTotals: state.CartReducer.cartTotals,
    navigationState: state.NavigationReducer[NavigationType.TOP_NAVIGATION_TYPE].navigationState,
    productsInWishlist: state.WishlistReducer.productsInWishlist || {},
    isWishlistLoading: state.WishlistReducer.isLoading,
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
    onClearSearchButtonClick: () => {},
});

class HeaderContainer extends DataContainer {
    state = {
        menu: {},
    };

    componentDidMount() {
        this._getMenu();
    }

    _getMenu() {
        this.fetchData(
            [MenuQuery.getQuery()],
            ({ menu }) => this.setState({
                menu: MenuHelper.reduce(menu),
            }),
        );
    }

    containerProps() {
        const { menu } = this.state;
        return {
            ...this.props,
            menu: Object.values(menu).length ? Object.values(menu)[0].children : {},
        };
    }

    render() {
        return (
            <HeaderComponent
                {...this.containerProps()}
                {...this.containerFunctions}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);