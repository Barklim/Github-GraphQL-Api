import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByRepoId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>('repoDetails/fetchCommentsByRepoId', async (repoId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!repoId) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<Comment[]>('/comments', {
            params: {
                repoId,
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
