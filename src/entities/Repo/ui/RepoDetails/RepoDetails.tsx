import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { fetchRepoById } from '../../model/services/fetchRepoById/fetchRepoById';
import { repoDetailsReducer } from '../../model/slice/repoDetailsSlice';
import cls from './RepoDetails.module.scss';
import {
    getRepoDetailsData,
    getRepoDetailsError,
    getRepoDetailsIsLoading,
} from '../../model/selectors/repoDetails';
import { renderRepoBlock } from './renderBlock';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface RepoDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    repoDetails: repoDetailsReducer,
};

const Deprecated = () => {
    const repo = useSelector(getRepoDetailsData);
    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <Avatar size={200} src={repo?.nameWithOwner} className={cls.avatar} />
            </HStack>
            <VStack gap="4" max data-testid="RepoDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={repo?.title}
                    text={repo?.shortDescriptionHTML}
                    size={TextSize.L}
                />
                <HStack gap="8" className={cls.repoInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <TextDeprecated text={String(repo?.stars)} />
                </HStack>
                <HStack gap="8" className={cls.repoInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <TextDeprecated text={repo?.updatedAt} />
                </HStack>
            </VStack>
            {repo?.blocks.map(renderRepoBlock)}
        </>
    );
};

const Redesigned = () => {
    const repo = useSelector(getRepoDetailsData);
    const { t } = useTranslation();

    return (
        <>
            <Text title={repo?.title} size="l" bold />
            <Text title={repo?.shortDescriptionHTML} />
            {repo?.blocks.map(renderRepoBlock)}
        </>
    );
};

export const RepoDetailsSkeleton = () => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });
    return (
        <VStack gap="16" max>
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </VStack>
    );
};

export const RepoDetails = memo((props: RepoDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getRepoDetailsIsLoading);
    const error = useSelector(getRepoDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchRepoById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <RepoDetailsSkeleton />;
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке репозитория.')}
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Redesigned />}
                off={<Deprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.RepoDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
