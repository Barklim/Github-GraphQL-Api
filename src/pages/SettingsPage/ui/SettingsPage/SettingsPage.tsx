import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SettingsPage.module.scss';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SettingsProfile, SettingsProfileUI } from '@/features/settingsProfile';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const userProfileKey = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    return (
        <Page data-testid="SettingsPage" className={classNames(cls.SettingsPage, {}, [className])}>
            <VStack gap="16" max className={classNames(cls.LayoutMain, {}, [className])}>
                { userProfileKey && <SettingsProfile id={userProfileKey as string} /> } 
                <SettingsProfileUI />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
