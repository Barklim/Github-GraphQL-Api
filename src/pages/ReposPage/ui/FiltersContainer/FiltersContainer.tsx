import { memo } from 'react';
import { ReposFilters } from '@/widgets/ReposFilters';
import { useRepoFilters } from '../../lib/hooks/useRepoFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        onChangeSort,
        onChangeType,
        sort,
        language,
        onChangeSearch,
        search,
        onChangeOrder,
        order,
    } = useRepoFilters();

    return (
        <ReposFilters
            language={language}
            onChangeSearch={onChangeSearch}
            order={order}
            onChangeOrder={onChangeOrder}
            search={search}
            sort={sort}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            className={className}
        />
    );
});
