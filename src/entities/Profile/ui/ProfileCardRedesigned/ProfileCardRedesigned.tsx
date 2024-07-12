import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardRedesigned.module.scss';

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation();

    return (
        <HStack justify="center" max>
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </HStack>
    );
};

export const ProfileCardRedesignedSkeleton = () => {
    return (
        <VStack gap="16" max>
            <Skeleton width="100%" height={41} />
            <HStack gap="32" max>
                <VStack gap="16" max>
                    <Skeleton width="20%" height={24} />   
                    <Skeleton width="440px" height={42} />
                    <Skeleton width="20%" height={24} />
                    <Skeleton width="440px" height={42} />
                </VStack>
            </HStack>
        </VStack>
    );
};

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        onChangeUserProfilename,
        onChangeLocation,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    return (
        <VStack gap="16" max className={classNames(cls.LayoutMain, {}, [className])}>
            {/* Todo: edit avatar */}
            {/* {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar size={128} src={data?.avatar} />
                </HStack>
            )} */}
            <Text title={t('Public Profile')} subHead/>
                            
            <VStack gap="8" max>
                <VStack gap="4" max>
                    <Text text={t('Name')}/>
                    <Input
                        value={data?.userProfileName}
                        onChange={onChangeUserProfilename}
                        width={440}
                        size='m'
                        data-testid="ProfileCard.userProfileName"
                    />
                </VStack>

                {/* area for bio */}
                {/* <Input
                    value={data?.Bio}
                    label={t('Bio')}
                    onChange={onChangeBio}
                /> */}

                <VStack gap="4" max>
                    <Text text={t('Location')}/>
                    <Input
                        value={data?.userLocation}
                        onChange={onChangeLocation}
                        width={440}
                        size='m'
                        data-testid="ProfileCard.userLocation"
                    />
                </VStack>

                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                />
            </VStack>
        </VStack>
    );
});
