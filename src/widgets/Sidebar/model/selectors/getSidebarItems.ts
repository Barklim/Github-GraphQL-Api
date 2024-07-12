import { useSelector } from 'react-redux';
import { UserRole, getUserAuthData } from '@/entities/User';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';

import MainIcon from '@/shared/assets/icons/home.svg';
import RepoIcon from '@/shared/assets/icons/repo.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import SettingsIcon from '@/shared/assets/icons/settings.svg';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteRepos,
    getRouteMain,
    getRouteSettings,
    getRouteAdmin
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const isAdmin = userData?.roles?.includes(UserRole.ADMIN)

    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Главная',
        },
        {
            path: getRouteSettings(),
            Icon: SettingsIcon,
            text: 'Настройки',
        },
        {
            path: getRouteRepos(),
            Icon: RepoIcon,
            text: 'Репозитории',
        },
    ];

    if (isAdmin) {
        sidebarItemsList.push(
            {
                path: getRouteAdmin(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Админка',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
};
