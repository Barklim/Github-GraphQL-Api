import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getRepoDetailsData } from '@/entities/Repo';

export const getCanEditRepo = createSelector(
    getRepoDetailsData,
    getUserAuthData,
    (repo, user) => {
        if (!repo || !user) {
            return false;
        }

        return repo.user.id === user.id;
    },
);
