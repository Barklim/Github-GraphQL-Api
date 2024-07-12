import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Repo } from '@/entities/Repo';

export const fetchRepoRecommendations = createAsyncThunk<
    Repo[],
    void,
    ThunkConfig<string>
>('repoDetailsPage/fetchRepoRecommendations', async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Repo[]>('/repos', {
            params: {
                _limit: 4,
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
