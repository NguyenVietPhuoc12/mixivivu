import { LiaLanguageSolid } from 'react-icons/lia';
import { CgProfile } from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { GoSignOut } from 'react-icons/go';

export const MENU_ITEMS = [
    {
        id: 1,
        icon: <LiaLanguageSolid />,
        title: 'Tiếng Việt',
    },
    {
        id: 2,
        icon: <CgProfile />,
        title: 'Thông tin tài khoản',
    },
    {
        id: 3,
        icon: <IoMdNotificationsOutline />,
        title: 'Thông báo',
    },
    {
        id: 4,
        icon: <MdOutlineSupportAgent />,
        title: 'Hỗ trợ và giúp đỡ',
    },
    {
        id: 5,
        icon: <GoSignOut />,
        title: 'Đăng xuất',
    },
];
