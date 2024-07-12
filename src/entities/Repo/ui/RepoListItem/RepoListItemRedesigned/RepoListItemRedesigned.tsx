/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RepoListItemRedesigned.module.scss';
import { RepoleListItemProps } from '../RepoListItem';
import { Text } from '@/shared/ui/redesigned/Text';
import { RepoTextBlock } from '../../../model/types/repo';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteRepoDetails } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import {
    RepoBlockType,
    RepoView,
} from '../../../model/consts/repoConsts';
import StarSvg from '@/shared/assets/icons/star.svg';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

export const RepoListItemRedesigned = memo((props: RepoleListItemProps) => {
    const { className, repo, view, target } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();

    const userInfo = (
        <>
            <Avatar
                size={32}
                src={repo.user.avatar}
                className={cls.avatar}
            />
            <AppLink
                target={target}
                to={getRouteRepoDetails(repo.id)}
            >
                <Text variant='accent' bold text={repo.nameWithOwner} />
            </AppLink>
        </>
    );

    const languages = <Text text={repo.languages.join(', ')} className={cls.languages} />;
    const stars = (
        <HStack gap="8">
            <StarSvg
                width={16}
                height={16}
                color={theme === Theme.DARK ? 'white' : 'black'}
                className={cls.appLogo}
            /> 
            <Text text={String(repo.stars)} className={cls.stars} />
        </HStack>
    );
    const updatedAt = <HStack>
        <Text text={t('Updated on')} />&nbsp;
        <Text text={repo.updatedAt} />&nbsp;
        <Text text={t('Y')} />
    </HStack>
    

    if (view === RepoView.BIG) {
        const textBlock = repo.blocks.find(
            (block) => block.type === RepoBlockType.TEXT,
        ) as RepoTextBlock;

        return (
            <Card
                padding="24"
                max
                borderRepo
                data-testid="RepoListItem"
                className={classNames(cls.RepoListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack max gap="16">
                    <HStack gap="8" max>
                        {userInfo}
                    </HStack>
                    
                    <Text title={repo.shortDescriptionHTML} size="s" />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack>
                        {languages}
                        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                        {stars} 
                        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                        {updatedAt}
                    </HStack>
                </VStack>
            </Card>
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
            <Card 
                className={cls.card} 
                border="partial" 
                padding="0" 
                borderRepo
                fullHeight
            >
                <VStack justify="between" className={cls.innerCard} max>
                    <VStack gap='32'>
                        <HStack gap="8" className={cls.userInfo}>{userInfo}</HStack>
                        <Text text={repo.shortDescriptionHTML} className={cls.shortDescriptionHTML} />
                    </VStack>
                    <HStack justify="between" max>
                        <Text
                            text={repo.primaryLanguage}
                        />
                        {stars}
                    </HStack>
                </VStack>
                
            </Card>
        </AppLink>
    );
});
