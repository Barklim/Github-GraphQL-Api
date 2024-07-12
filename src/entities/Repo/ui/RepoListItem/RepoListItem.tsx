import { HTMLAttributeAnchorTarget, memo } from 'react';
import { RepoView } from '../../model/consts/repoConsts';
import { Repo } from '../../model/types/repo';
import { ToggleFeatures } from '@/shared/lib/features';
import { RepoListItemDeprecated } from './RepoListItemDeprecated/RepoListItemDeprecated';
import { RepoListItemRedesigned } from './RepoListItemRedesigned/RepoListItemRedesigned';

export interface RepoleListItemProps {
    className?: string;
    repo: Repo;
    view: RepoView;
    target?: HTMLAttributeAnchorTarget;
}

export const RepoListItem = memo((props: RepoleListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<RepoListItemRedesigned {...props} />}
            off={<RepoListItemDeprecated {...props} />}
        />
    );
});
