import { lazy } from 'react';

export const RepoDetailsPageAsync = lazy(
    () => import('./RepoDetailsPage'),
);
