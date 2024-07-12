import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import {
    useGetRepoRating,
    useRateRepo,
} from '../../api/repoRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface RepoRatingProps {
    className?: string;
    repoId: string;
}

const RepoRating = memo((props: RepoRatingProps) => {
    const { className, repoId } = props;
    const { t } = useTranslation('repo-details');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetRepoRating({
        repoId,
        userId: userData?.id ?? '',
    });
    const [rateRepoMutation] = useRateRepo();

    const handleRateRepo = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateRepoMutation({
                    userId: userData?.id ?? '',
                    repoId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [repoId, rateRepoMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateRepo(starsCount, feedback);
        },
        [handleRateRepo],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateRepo(starsCount);
        },
        [handleRateRepo],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Rate the repository')}
            feedbackTitle={t(
                'Оставьте свой отзыв о репозитории, это поможет улучшить качество',
            )}
            hasFeedback
        />
    );
});

export default RepoRating;
