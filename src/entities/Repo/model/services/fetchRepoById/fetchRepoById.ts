import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Repo } from '../../types/repo';

export const fetchRepoById = createAsyncThunk<
    Repo,
    string | undefined,
    ThunkConfig<string>
>('repoDetails/fetchRepoById', async (repoId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!repoId) {
        throw new Error('');
    }

    try {
        const response = await extra.api.get<Repo>(
            `/repos/${repoId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
