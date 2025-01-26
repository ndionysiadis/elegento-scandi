import { connect } from 'react-redux';
import { changeNavigationState } from 'SourceStore/Navigation/Navigation.action';
import { NavigationType } from 'SourceStore/Navigation/Navigation.type';
import HeaderComponent from './Header.component';

/** @namespace Component/Header/Container/mapStateToProps */
const mapStateToProps = (state) => ({
    isMobileMenuOpen:
        state.NavigationReducer[NavigationType.TOP_NAVIGATION_TYPE].navigationState.name === 'menu',
});

/** @namespace Component/Header/Container/mapDispatchToProps */
const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleMobileMenu: (isOpen) => {
        const newState = isOpen ? 'menu' : 'closed';
        dispatch(
            changeNavigationState(NavigationType.TOP_NAVIGATION_TYPE, {
                name: newState,
                force: true,
            })
        );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);