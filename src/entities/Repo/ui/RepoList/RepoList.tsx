import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { RepoView } from '../../model/consts/repoConsts';
import { RepoListItemSkeleton } from '../RepoListItem/RepoListItemSkeleton';
import { RepoListItem } from '../RepoListItem/RepoListItem';
import cls from './RepoList.module.scss';
import { Repo } from '../../model/types/repo';
import { ToggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface RepoListProps {
    className?: string;
    repos: Repo[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: RepoView;
}

const getSkeletons = (view: RepoView) =>
    new Array(view === RepoView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <RepoListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const RepoList = memo((props: RepoListProps) => {
    const {
        className,
        repos,
        view = RepoView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !repos.length) {
        return (
            <div
                className={classNames(cls.RepoList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Репозитории не найдены')} />
            </div>
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    wrap="wrap"
                    gap="16"
                    className={classNames(cls.RepoListRedesigned, {}, [])}
                    data-testid="RepoList"
                >
                    {repos.map((item) => (
                        <RepoListItem
                            repo={item}
                            view={view}
                            target={target}
                            key={item.id}
                            className={cls.card}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                </HStack>
            }
            off={
                <div
                    className={classNames(cls.RepoList, {}, [
                        className,
                        cls[view],
                    ])}
                    data-testid="RepoList"
                >
                    {repos.map((item) => (
                        <RepoListItem
                            repo={item}
                            view={view}
                            target={target}
                            key={item.id}
                            className={cls.card}
                        />
                    ))}
                    {isLoading && getSkeletons(view)}
                </div>
            }
        />
    );
});
