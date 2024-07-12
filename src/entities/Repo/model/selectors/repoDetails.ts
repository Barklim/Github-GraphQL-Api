import { StateSchema } from '@/app/providers/StoreProvider';

export const getRepoDetailsData = (state: StateSchema) =>
    state.repoDetails?.data;
export const getRepoDetailsIsLoading = (state: StateSchema) =>
    state.repoDetails?.isLoading || false;
export const getRepoDetailsError = (state: StateSchema) =>
    state.repoDetails?.error;
