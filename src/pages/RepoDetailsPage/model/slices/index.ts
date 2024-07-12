import { combineReducers } from '@reduxjs/toolkit';
import { RepoDetailsPageSchema } from '../types';
import { repoDetailsPageRecommendationsReducer } from './repoDetailsPageRecommendationsSlice';
import { repoDetailsCommentsReducer } from './repoDetailsCommentsSlice';

export const repoDetailsPageReducer =
    combineReducers<RepoDetailsPageSchema>({
        recommendations: repoDetailsPageRecommendationsReducer,
        comments: repoDetailsCommentsReducer,
    });
