import { StateSchema } from '@/app/providers/StoreProvider';

export const getRepoCommentsIsLoading = (state: StateSchema) => {
    return state.repoDetailsPage?.comments?.isLoading;
};

export const getRepoCommentsError = (state: StateSchema) => {
    return state.repoDetailsPage?.comments?.error;
};
