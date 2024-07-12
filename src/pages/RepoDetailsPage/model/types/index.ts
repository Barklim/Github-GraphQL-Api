import { RepoDetailsCommentsSchema } from './RepoDetailsCommentsSchema';
import { RepoDetailsRecommendationsSchema } from './RepoDetailsRecommendationsSchema';

export interface RepoDetailsPageSchema {
    comments: RepoDetailsCommentsSchema;
    recommendations: RepoDetailsRecommendationsSchema;
}
