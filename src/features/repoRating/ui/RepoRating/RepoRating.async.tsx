import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { RepoRatingProps } from './RepoRating';

const RepoRatingLazy = lazy(() => import('./RepoRating'));

export const RepoRatingAsync = (props: RepoRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <RepoRatingLazy {...props} />
        </Suspense>
    );
};
