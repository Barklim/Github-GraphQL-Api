import { EntityState } from '@reduxjs/toolkit';
import {
    Repo,
    RepoView,
    RepoSortField,
    RepoType,
} from '@/entities/Repo';
import { SortOrder } from '@/shared/types/sort';

export interface ReposPageSchema extends EntityState<Repo> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: RepoView;
    order: SortOrder;
    sort: RepoSortField;
    search: string;
    language: RepoType;

    _inited: boolean;
}
