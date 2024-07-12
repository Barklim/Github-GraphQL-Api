import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getRepoDetailsData } from '@/entities/Repo';
import { fetchCommentsByRepoId } from '../fetchCommentsByRepoId/fetchCommentsByRepoId';

export const addCommentForRepo = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('repoDetails/addCommentForRepo', async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const repo = getRepoDetailsData(getState());

    if (!userData || !text || !repo) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            repoId: repo.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByRepoId(repo.id));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
