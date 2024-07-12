import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import cls from './ReposPageFilters.module.scss';

import { RepoSortSelector } from '@/features/RepoSortSelector';
import { RepoViewSelector } from '@/features/RepoStarSelector';
import { RepoTypeTabs } from '@/features/RepoTypeTabs';
import { useRepoFilters } from '../../lib/hooks/useRepoFilters';

interface ReposPageFiltersProps {
    className?: string;
}

export const ReposPageFilters = memo((props: ReposPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onChangeSort,
        onChangeType,
        sort,
        language,
        onChangeSearch,
        search,
        onChangeView,
        view,
        onChangeOrder,
        order,
    } = useRepoFilters();

    return (
        <div className={classNames(cls.ReposPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <RepoSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <RepoViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
            <RepoTypeTabs
                value={language}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
