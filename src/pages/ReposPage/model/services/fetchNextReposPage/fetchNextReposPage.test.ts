import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextReposPage } from './fetchNextReposPage';
import { fetchReposList } from '../fetchReposList/fetchReposList';

jest.mock('../fetchReposList/fetchReposList');

describe('fetchNextReposPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextReposPage, {
            reposPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchReposList).toHaveBeenCalled();
    });
    test('fetchAritcleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextReposPage, {
            reposPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchReposList).not.toHaveBeenCalled();
    });
});
