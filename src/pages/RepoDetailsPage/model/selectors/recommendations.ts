import { StateSchema } from '@/app/providers/StoreProvider';

export const getRepoRecommendationsIsLoading = (state: StateSchema) => {
    return state.repoDetailsPage?.recommendations?.isLoading;
};

export const getRepoRecommendationsError = (state: StateSchema) => {
    return state.repoDetailsPage?.recommendations?.error;
};
