import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { RepoList } from '@/entities/Repo';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useRepoRecommendationsList } from '../../api/repoRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface RepoRecommendationsListProps {
    className?: string;
}

export const RepoRecommendationsList = memo(
    (props: RepoRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('repo-details');
        const {
            isLoading,
            data: repos,
            error,
        } = useRepoRecommendationsList(3);

        if (isLoading || error || !repos) {
            return null;
        }

        return (
            <VStack
                data-testid="RepoRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Linked')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Linked')}
                        />
                    }
                />
                <RepoList repos={repos} target="_blank" />
            </VStack>
        );
    },
);
