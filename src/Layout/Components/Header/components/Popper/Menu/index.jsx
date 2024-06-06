import TippyHeadless from '@tippyjs/react/headless';
import './Menu.scss';
import { Wrapper as PopperWrapper } from '~/Layout/Components/Header/components/Popper';

const Menu = ({ children, items }) => {
    return (
        <div className="menu-wrapper">
            <TippyHeadless
                trigger="click"
                interactive
                offset={[-50, 10]}
                placement="bottom"
                render={(attrs) => {
                    return (
                        <div className="user-content" tabIndex="-1" {...attrs}>
                            <PopperWrapper className="menu-popper">
                                <div className="menu-list">
                                    {items.map((item) => {
                                        return (
                                            <div className="menu-item" key={item.id}>
                                                <span>{item.icon}</span>
                                                <h4>{item.title}</h4>
                                            </div>
                                        );
                                    })}
                                </div>
                            </PopperWrapper>
                        </div>
                    );
                }}
            >
                {children}
            </TippyHeadless>
        </div>
    );
};

export default Menu;
