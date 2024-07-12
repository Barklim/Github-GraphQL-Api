import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getReposPageHasMore,
    getReposPageIsLoading,
    getReposPageNum,
} from '../../selectors/reposPageSelectors';
import { reposPageActions } from '../../slices/reposPageSlice';
import { fetchReposList } from '../fetchReposList/fetchReposList';

export const fetchNextReposPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('reposPage/fetchNextReposPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getReposPageHasMore(getState());
    const page = getReposPageNum(getState());
    const isLoading = getReposPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(reposPageActions.setPage(page + 1));
        dispatch(fetchReposList({}));
    }
});
