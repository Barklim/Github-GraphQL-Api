import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ReposFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { RepoSortSelector } from '@/features/RepoSortSelector';
import { RepoTypeTabs } from '@/features/RepoTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { RepoSortField, RepoType } from '@/entities/Repo';
import { SortOrder } from '@/shared/types/sort';
import { Input } from '@/shared/ui/redesigned/Input';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ReposFiltersProps {
    className?: string;
    sort: RepoSortField;
    order: SortOrder;
    language: RepoType;
    search: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: RepoSortField) => void;
    onChangeType: (language: RepoType) => void;
}

export const ReposFilters = memo((props: ReposFiltersProps) => {
    const {
        className,
        onChangeType,
        onChangeSearch,
        search,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        language,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.ReposFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    size="s"
                    placeholder={t('Поиск')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <RepoSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <RepoTypeTabs
                    value={language}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
            </VStack>
        </Card>
    );
});
