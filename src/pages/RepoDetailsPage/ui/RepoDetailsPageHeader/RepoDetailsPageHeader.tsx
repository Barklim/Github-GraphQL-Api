import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteRepos } from '@/shared/const/router';

interface RepoDetailsPageHeaderProps {
    className?: string;
}

export const RepoDetailsPageHeader = memo(
    (props: RepoDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();

        const onBackToList = useCallback(() => {
            navigate(getRouteRepos());
        }, [navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
            </HStack>
        );
    },
);
