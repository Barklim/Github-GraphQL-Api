import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepoById } from '../services/fetchRepoById/fetchRepoById';
import { Repo } from '../types/repo';
import { RepoDetailsSchema } from '../types/repoDetailsSchema';

const initialState: RepoDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const repoDetailsSlice = createSlice({
    name: 'repoDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepoById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchRepoById.fulfilled,
                (state, action: PayloadAction<Repo>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchRepoById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: repoDetailsActions } = repoDetailsSlice;
export const { reducer: repoDetailsReducer } = repoDetailsSlice;
