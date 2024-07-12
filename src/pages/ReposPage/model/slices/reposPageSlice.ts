import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Repo,
    RepoType,
    RepoView,
    RepoSortField,
} from '@/entities/Repo';
import { REPOS_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types/sort';
import { ReposPageSchema } from '../types/reposPageSchema';
import { fetchReposList } from '../services/fetchReposList/fetchReposList';

const reposAdapter = createEntityAdapter<Repo>({
    selectId: (repo) => repo.id,
});

export const getRepos = reposAdapter.getSelectors<StateSchema>(
    (state) => state.reposPage || reposAdapter.getInitialState(),
);

const reposPageSlice = createSlice({
    name: 'reposPageSlice',
    initialState: reposAdapter.getInitialState<ReposPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: RepoView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: RepoSortField.UPDATED,
        search: '',
        order: 'asc',
        language: RepoType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<RepoView>) => {
            state.view = action.payload;
            localStorage.setItem(
                REPOS_VIEW_LOCALSTORAGE_KEY,
                action.payload,
            );
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<RepoSortField>) => {
            state.sort = action.payload;
        },
        setLanguage: (state, action: PayloadAction<RepoType>) => {
            state.language = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(
                REPOS_VIEW_LOCALSTORAGE_KEY,
            ) as RepoView;
            state.view = view;
            state.limit = view === RepoView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReposList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    reposAdapter.removeAll(state);
                }
            })
            .addCase(fetchReposList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    reposAdapter.setAll(state, action.payload);
                } else {
                    reposAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchReposList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: reposPageReducer, actions: reposPageActions } =
    reposPageSlice;
