import { memo } from 'react';
import { RepoViewSelector } from '@/features/RepoStarSelector';
import { useRepoFilters } from '../../lib/hooks/useRepoFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { view, onChangeView } = useRepoFilters();

        return (
            <RepoViewSelector
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
