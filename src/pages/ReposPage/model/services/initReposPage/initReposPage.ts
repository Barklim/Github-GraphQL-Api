import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { RepoSortField, RepoType } from '@/entities/Repo';
import { SortOrder } from '@/shared/types/sort';
import { getReposPageInited } from '../../selectors/reposPageSelectors';
import { reposPageActions } from '../../slices/reposPageSlice';
import { fetchReposList } from '../fetchReposList/fetchReposList';

export const initReposPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('reposPage/initReposPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getReposPageInited(getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as RepoSortField;
        const searchFromUrl = searchParams.get('search');
        const languageFromUrl = searchParams.get('languages') as RepoType;

        if (orderFromUrl) {
            dispatch(reposPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(reposPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(reposPageActions.setSearch(searchFromUrl));
        }
        if (languageFromUrl) {
            dispatch(reposPageActions.setLanguage(languageFromUrl));
        }

        dispatch(reposPageActions.initState());
        dispatch(fetchReposList({}));
    }
});
