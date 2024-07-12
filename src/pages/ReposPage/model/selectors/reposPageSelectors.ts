import { StateSchema } from '@/app/providers/StoreProvider';
import { RepoSortField, RepoType, RepoView } from '@/entities/Repo';
import { buildSelector } from '@/shared/lib/store';

export const getReposPageIsLoading = (state: StateSchema) =>
    state.reposPage?.isLoading || false;
export const getReposPageError = (state: StateSchema) =>
    state.reposPage?.error;
export const getReposPageView = (state: StateSchema) =>
    state.reposPage?.view || RepoView.BIG;
export const getReposPageNum = (state: StateSchema) =>
    state.reposPage?.page || 1;
export const getReposPageLimit = (state: StateSchema) =>
    state.reposPage?.limit || 9;
export const getReposPageHasMore = (state: StateSchema) =>
    state.reposPage?.hasMore;
export const getReposPageInited = (state: StateSchema) =>
    state.reposPage?._inited;
export const getReposPageOrder = (state: StateSchema) =>
    state.reposPage?.order ?? 'asc';
export const getReposPageSort = (state: StateSchema) =>
    state.reposPage?.sort ?? RepoSortField.UPDATED;
export const getReposPageSearch = (state: StateSchema) =>
    state.reposPage?.search ?? '';
export const getReposPageType = (state: StateSchema) =>
    state.reposPage?.language ?? RepoType.ALL;

export const [useRepoItemById] = buildSelector(
    (state, id: string) => state.reposPage?.entities[id],
);
