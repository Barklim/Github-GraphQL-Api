import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    getReposPageOrder,
    getReposPageSearch,
    getReposPageSort,
    getReposPageType,
    getReposPageView,
} from '../../model/selectors/reposPageSelectors';
import { RepoSortField, RepoType, RepoView } from '@/entities/Repo';
import { reposPageActions } from '../../model/slices/reposPageSlice';
import { SortOrder } from '@/shared/types/sort';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchReposList } from '../../model/services/fetchReposList/fetchReposList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';

export function useRepoFilters() {
    const view = useSelector(getReposPageView);
    const sort = useSelector(getReposPageSort);
    const order = useSelector(getReposPageOrder);
    const search = useSelector(getReposPageSearch);
    const language = useSelector(getReposPageType);

    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchReposList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: RepoView) => {
            dispatch(reposPageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (newSort: RepoSortField) => {
            dispatch(reposPageActions.setSort(newSort));
            dispatch(reposPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(reposPageActions.setOrder(newOrder));
            dispatch(reposPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(reposPageActions.setSearch(search));
            dispatch(reposPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
        (value: RepoType) => {
            dispatch(reposPageActions.setLanguage(value));
            dispatch(reposPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        view,
        sort,
        order,
        search,
        language,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    };
}
