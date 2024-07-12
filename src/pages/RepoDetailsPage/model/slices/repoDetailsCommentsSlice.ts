import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchCommentsByRepoId } from '../services/fetchCommentsByRepoId/fetchCommentsByRepoId';
import { RepoDetailsCommentsSchema } from '../types/RepoDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getRepoComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.repoDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const repoDetailsCommentsSlice = createSlice({
    name: 'repoDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<RepoDetailsCommentsSchema>(
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
            .addCase(fetchCommentsByRepoId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByRepoId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByRepoId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: repoDetailsCommentsReducer } =
    repoDetailsCommentsSlice;
