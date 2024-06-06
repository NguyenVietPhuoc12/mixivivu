/* Import libraries from react */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* Import Tippy Library */
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

/* Import component Icons */
import { MenuIcon, CloseIcon, TelephoneIcon } from '../Icons';
import './Header.scss';

/* Import routes config */
import routesConfig from '~/config/routes';
import Menu from './components/Popper/Menu';

/* Import db of detail menu item  */
import { MENU_ITEMS } from '~/db/MENU_ITEMS';

const Header = () => {
    const [active, setActive] = useState('header__navbar');

    const hasUserLogged = true;

    const removeMenuNavbarWhenClick = () => {
        setActive('header__navbar');
    };

    // Function handle show navbar in responsive menu mobile device max-width: 768px
    const handleShowNavbar = () => {
        setActive('header__navbar active__navbar');
    };

    //Function handle side effect hide navbar menu
    const handleHideNavbar = () => {
        setActive('header__navbar');
    };

    return (
        <div className="wrapper">
            <header className="header flex">
                <div className="header__logo">
                    <Link to={routesConfig.home}>
                        <img src="https://mixivivu.com/_next/image?url=%2Fblack-logo.png&w=384&q=75" alt="logo" />
                    </Link>
                </div>

                <div className={active}>
                    <ul className="header__navbar-list flex">
                        <li className="header__navbar-item" onClick={removeMenuNavbarWhenClick}>
                            <Link to={routesConfig.home}>Trang chủ</Link>
                        </li>
                        <li className="header__navbar-item" onClick={removeMenuNavbarWhenClick}>
                            <Link to={routesConfig.package}>Gói dịch vụ</Link>
                        </li>
                        <li className="header__navbar-item" onClick={removeMenuNavbarWhenClick}>
                            <Link to={routesConfig.hotel}>Khách sạn</Link>
                        </li>
                        <li className="header__navbar-item" onClick={removeMenuNavbarWhenClick}>
                            <Link to={routesConfig.tour}>Tour du lịch</Link>
                        </li>
                        <li className="header__navbar-item" onClick={removeMenuNavbarWhenClick}>
                            <Link to={routesConfig.yacht}>Du thuyền</Link>
                        </li>
                        <li className="header__navbar-item" onClick={removeMenuNavbarWhenClick}>
                            <Link to={routesConfig.about}>Về Mixivivu</Link>
                        </li>

                        <button className="btn" onClick={removeMenuNavbarWhenClick}>
                            <Link to={routesConfig.booking}>Đặt ngay</Link>
                            <div className="btn__image">
                                <img src={require('~/assets/images/flight.png')} />
                            </div>
                        </button>
                    </ul>

                    <div className="header__navbar-close" onClick={handleHideNavbar}>
                        <CloseIcon className="icon" />
                    </div>
                </div>

                <div className="header__actions">
                    {hasUserLogged ? (
                        <Menu items={MENU_ITEMS}>
                            <div className="header__actions-image">
                                <img src={require('~/assets/images/avatar.png')} alt="avatar" />
                            </div>
                        </Menu>
                    ) : (
                        <div className="header__actions-btn">
                            <div>
                                <Tippy interactive placement="bottom" delay={[500, 0]} content="Hotline: 0702407702">
                                    <div className="header__actions-contact">
                                        <TelephoneIcon className="icon" />
                                        <a href="tel:0702407702">Hotline: 0702407702</a>
                                    </div>
                                </Tippy>
                            </div>
                            <Link to={routesConfig.login}>
                                <button className="btn header__login-btn">Đăng nhập</button>
                            </Link>
                        </div>
                    )}
                    <div className="header__toggle-navbar" onClick={handleShowNavbar}>
                        <MenuIcon className="icon" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
