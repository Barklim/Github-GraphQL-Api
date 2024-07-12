import { Repo } from './repo';

export interface RepoDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Repo;
}
