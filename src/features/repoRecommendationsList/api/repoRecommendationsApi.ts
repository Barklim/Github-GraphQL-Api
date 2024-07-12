import { rtkApi } from '@/shared/api/rtkApi';
import { Repo } from '@/entities/Repo';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRepoRecommendationsList: build.query<Repo[], number>({
            query: (limit) => ({
                url: '/repos',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const useRepoRecommendationsList =
    recommendationsApi.useGetRepoRecommendationsListQuery;
