import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RepoList } from '@/entities/Repo';
import { Text } from '@/shared/ui/deprecated/Text';
import { getRepos } from '../../model/slices/reposPageSlice';
import {
    getReposPageError,
    getReposPageIsLoading,
    getReposPageView,
} from '../../model/selectors/reposPageSelectors';

interface RepoInfiniteListProps {
    className?: string;
}

export const RepoInfiniteList = memo((props: RepoInfiniteListProps) => {
    const { className } = props;
    const repos = useSelector(getRepos.selectAll);
    const isLoading = useSelector(getReposPageIsLoading);
    const view = useSelector(getReposPageView);
    const error = useSelector(getReposPageError);
    const { t } = useTranslation();

    if (error) {
        return <Text text={t('Ошибка при загрузке репозиториев')} />;
    }

    return (
        <RepoList
            isLoading={isLoading}
            view={view}
            repos={repos}
            className={className}
        />
    );
});
