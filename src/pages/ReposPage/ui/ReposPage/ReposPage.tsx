import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { RepoInfiniteList } from '../RepoInfiniteList/RepoInfiniteList';
import { ReposPageFilters } from '../ReposPageFilters/ReposPageFilters';
import { fetchNextReposPage } from '../../model/services/fetchNextReposPage/fetchNextReposPage';
import { initReposPage } from '../../model/services/initReposPage/initReposPage';
import { reposPageReducer } from '../../model/slices/reposPageSlice';
import cls from './ReposPage.module.scss';
import { RepoPageGreeting } from '@/features/repoPageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../StarSelectorContainer/StarSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

interface ReposPageProps {
    className?: string;
}

const reducers: ReducersList = {
    reposPage: reposPageReducer,
};

const ReposPage = (props: ReposPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextReposPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initReposPage(searchParams));
    });

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={
                        <Page
                            data-testid="ReposPage"
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                cls.ReposPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <RepoInfiniteList className={cls.list} />
                            <RepoPageGreeting />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid="ReposPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ReposPage, {}, [className])}
                >
                    <ReposPageFilters />
                    <RepoInfiniteList className={cls.list} />
                    <RepoPageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ReposPage);
