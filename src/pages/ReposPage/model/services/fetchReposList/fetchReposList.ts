import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Repo, RepoType } from '@/entities/Repo';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getReposPageLimit,
    getReposPageNum,
    getReposPageOrder,
    getReposPageSearch,
    getReposPageSort,
    getReposPageType,
} from '../../selectors/reposPageSelectors';

interface FetchReposListProps {
    replace?: boolean;
}

export const fetchReposList = createAsyncThunk<
    Repo[],
    FetchReposListProps,
    ThunkConfig<string>
>('reposPage/fetchReposList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getReposPageLimit(getState());
    const sort = getReposPageSort(getState());
    const order = getReposPageOrder(getState());
    const search = getReposPageSearch(getState());
    const page = getReposPageNum(getState());
    const languages = getReposPageType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            languages,
        });
        const response = await extra.api.get<Repo[]>('/repos', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                languages: languages === RepoType.ALL ? undefined : languages,
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
