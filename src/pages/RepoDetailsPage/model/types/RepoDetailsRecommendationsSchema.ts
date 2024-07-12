import { EntityState } from '@reduxjs/toolkit';
import { Repo } from '@/entities/Repo';

export interface RepoDetailsRecommendationsSchema
    extends EntityState<Repo> {
    isLoading?: boolean;
    error?: string;
}
