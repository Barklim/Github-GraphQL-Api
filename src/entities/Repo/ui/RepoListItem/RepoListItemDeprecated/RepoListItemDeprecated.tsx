import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../RepoListItem.module.scss';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { RepoTextBlock } from '../../../model/types/repo';
import {
    RepoView,
    RepoBlockType,
} from '../../../model/consts/repoConsts';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { RepoTextBlockComponent } from '../../RepoTextBlockComponent/RepoTextBlockComponent';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteRepoDetails } from '@/shared/const/router';
import { RepoleListItemProps } from '../RepoListItem';

export const RepoListItemDeprecated = memo((props: RepoleListItemProps) => {
    const { className, repo, view, target } = props;
    const { t } = useTranslation();

    const types = <Text text={repo.languages.join(', ')} className={cls.types} />;
    const stars = (
        <>
            <Text text={String(repo.stars)} className={cls.stars} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === RepoView.BIG) {
        const textBlock = repo.blocks.find(
            (block) => block.type === RepoBlockType.TEXT,
        ) as RepoTextBlock;

        return (
            <div
                data-testid="RepoListItem"
                className={classNames(cls.RepoListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={repo.user.avatar} />
                        <Text
                            text={repo.user.username}
                            className={cls.username}
                        />
                        <Text text={repo.updatedAt} className={cls.date} />
                    </div>
                    <Text title={repo.title} className={cls.title} />
                    {types}
                    {textBlock && (
                        <RepoTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        {stars}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid="RepoListItem"
            target={target}
            to={getRouteRepoDetails(repo.id)}
            className={classNames(cls.RepoListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Text text={repo.updatedAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {stars}
                </div>
                <Text text={repo.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
