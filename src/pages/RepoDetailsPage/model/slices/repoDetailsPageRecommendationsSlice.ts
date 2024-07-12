import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Repo } from '@/entities/Repo';
import { fetchRepoRecommendations } from '../services/fetchRepoRecommendations/fetchRepoRecommendations';
import { RepoDetailsRecommendationsSchema } from '../types/RepoDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Repo>({
    selectId: (repo) => repo.id,
});

export const getRepoRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.repoDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const repoDetailsPageRecommendationsSlice = createSlice({
    name: 'repoDetailsPageRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<RepoDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepoRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRepoRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRepoRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: repoDetailsPageRecommendationsReducer } =
repoDetailsPageRecommendationsSlice;
