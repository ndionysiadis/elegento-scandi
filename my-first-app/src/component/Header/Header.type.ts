import { ChangeEvent, MouseEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import {
    NavigationAbstractComponentProps,
    NavigationAbstractContainerProps,
} from 'Component/NavigationAbstract/NavigationAbstract.type';
import { CartTotals } from 'Store/Cart/Cart.type';
import { NavigationState } from 'Store/Navigation/Navigation.type';
import { Device } from 'Type/Device.type';
import { IndexedWishlistProduct } from 'Util/Product/Product.type';

export interface HeaderContainerMapStateProps {
    navigationState: NavigationState;
    cartTotals: CartTotals;
    compareTotals: number;
    Loading: boolean;
    header_logo_src: string;
    isOffline: boolean;
    logo_alt: string;
    logo_height: number;
    logo_width: number;
    isLoading: boolean;
    device: Device;
    activeOverlay: string;
    isWishlistLoading: boolean;
    productsInWishlist: Record<string, IndexedWishlistProduct>;
    isMobileMenuOpen: boolean;
}

export interface HeaderMapDispatchToProps {
    showOverlay: (overlayKey: string) => void;
    hideActiveOverlay: () => void;
    toggleMobileMenu: () => void;
}

export interface HeaderContainerFunctions {
    onEditButtonClick: (e: MouseEvent) => void;
    onMinicartButtonClick: () => void;
    onOkButtonClick: (e: MouseEvent) => void;
    onCancelButtonClick: () => void;
    onSearchOutsideClick: () => void;
    onMyAccountOutsideClick: () => void;
    onMinicartOutsideClick: () => void;
    onBackButtonClick: (e: MouseEvent) => void;
    onCloseButtonClick: (e: MouseEvent) => void;
    onSearchBarFocus: () => void;
    onClearSearchButtonClick: () => void;
    onMyAccountButtonClick: () => void;
    onSearchBarChange: (e: ChangeEvent<HTMLInputElement> | { target: { value: string } }) => void;
    shareWishlist: () => void;
    onSignIn: () => void;
    hideActiveOverlay: () => void;
    toggleMobileMenu: () => void;
}

export interface HeaderContainerProps extends
    HeaderContainerMapStateProps,
    HeaderMapDispatchToProps,
    NavigationAbstractContainerProps,
    RouteComponentProps {}

export interface HeaderComponentProps extends NavigationAbstractComponentProps {
    cartTotals: CartTotals;
    compareTotals: number;
    Loading: boolean;
    onBackButtonClick: (e: MouseEvent) => void;
    onCloseButtonClick: (e: MouseEvent) => void;
    onSearchBarFocus: () => void;
    onClearSearchButtonClick: () => void;
    onMyAccountButtonClick: () => void;
    onSearchBarChange: (e: ChangeEvent<HTMLInputElement> | { target: { value: string } }) => void;
    isWishlistLoading: boolean;
    onEditButtonClick: (e: MouseEvent) => void;
    onMinicartButtonClick: () => void;
    onOkButtonClick: (e: MouseEvent) => void;
    onCancelButtonClick: () => void;
    onSearchOutsideClick: () => void;
    onMyAccountOutsideClick: () => void;
    onMinicartOutsideClick: () => void;
    isClearEnabled: boolean;
    searchCriteria: string;
    shareWishlist: () => void;
    header_logo_src: string;
    logo_alt: string;
    logo_height: number;
    logo_width: number;
    isLoading: boolean;
    showMyAccountLogin: boolean;
    isCheckout: boolean;
    onSignIn: () => void;
    hideActiveOverlay: () => void;
    device: Device;
    firstname?: string;
    shouldRenderCartOverlay?: boolean;
    activeOverlay: string;
    productsInWishlist: Record<string, IndexedWishlistProduct>;
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    isOpen?: boolean;
    closeMenu?: () => void;
}

export type HeaderContainerPropsKeys =
    'activeOverlay'
    | 'navigationState'
    | 'cartTotals'
    | 'compareTotals'
    | 'Loading'
    | 'header_logo_src'
    | 'logo_alt'
    | 'logo_height'
    | 'logo_width'
    | 'isLoading'
    | 'isClearEnabled'
    | 'searchCriteria'
    | 'isCheckout'
    | 'showMyAccountLogin'
    | 'device'
    | 'isWishlistLoading'
    | 'shouldRenderCartOverlay'
    | 'firstname'
    | 'productsInWishlist'
    | 'isMobileMenuOpen'
    | 'toggleMobileMenu';
