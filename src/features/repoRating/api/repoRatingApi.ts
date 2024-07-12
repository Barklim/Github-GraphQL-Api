import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetRepoRatingArg {
    userId: string;
    repoId: string;
}

interface RateRepoArg {
    userId: string;
    repoId: string;
    rate: number;
    feedback?: string;
}

const repoRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRepoRating: build.query<Rating[], GetRepoRatingArg>({
            query: ({ repoId, userId }) => ({
                url: '/repo-ratings',
                params: {
                    userId,
                    repoId,
                },
            }),
        }),
        rateRepo: build.mutation<void, RateRepoArg>({
            query: (arg) => ({
                url: '/repo-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetRepoRating = repoRatingApi.useGetRepoRatingQuery;
export const useRateRepo = repoRatingApi.useRateRepoMutation;
