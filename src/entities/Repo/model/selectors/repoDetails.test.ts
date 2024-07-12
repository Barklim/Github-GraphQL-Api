import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getRepoDetailsData,
    getRepoDetailsError,
    getRepoDetailsIsLoading,
} from './repoDetails';

describe('repoDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            nameWithOwner: "nameWithOwner",
            title: 'title',
        };
        const state: DeepPartial<StateSchema> = {
            repoDetails: {
                data,
            },
        };
        expect(getRepoDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getRepoDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            repoDetails: {
                error: 'error',
            },
        };
        expect(getRepoDetailsError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getRepoDetailsError(state as StateSchema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            repoDetails: {
                isLoading: true,
            },
        };
        expect(getRepoDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getRepoDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
