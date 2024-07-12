import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RepoAdditionalInfo.module.scss';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import ArrowsSvg from '@/shared/assets/icons/arrows.svg';
import ArrowDownSvg from '@/shared/assets/icons/arrowDown.svg';
import { RepoRating } from '@/features/repoRating';

interface RepoAdditionalInfoProps {
    className?: string;
    author: User;
    updatedAt: string;
    stars: number;
    onEdit: () => void;
}

export const RepoAdditionalInfo = memo(
    (props: RepoAdditionalInfoProps) => {
        const { className, author, updatedAt, stars, onEdit } = props;
        const { t } = useTranslation('repo-details');
        const { id } = useParams<{ id: string }>();

        return (
            <VStack
                gap="32"
                className={classNames(cls.RepoAdditionalInfo, {}, [
                    className,
                ])}
            >
                <HStack gap="8">
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} bold />
                </HStack>
                <HStack gap="8">
                    <Button variant='filled' color='success' onClick={onEdit}>
                        <ArrowsSvg
                            width={13}
                            height={13}
                            color="white"
                            className={cls.appLogo}
                        />
                        &nbsp;
                        {t('code')}
                        &nbsp;
                        <ArrowDownSvg
                            width={16}
                            height={16}
                            color="white"
                            className={cls.appLogo}
                        />
                    </Button>
                    <Text text={t('{{count}} stars', { count: stars })} />
                </HStack>
                <HStack gap="8">
                    <Text text={t('Updated on')} />
                    <Text text={updatedAt} />
                </HStack>
                <RepoRating repoId={id as string} />
            </VStack>
        );
    },
);
