import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { RepoDetails } from '@/entities/Repo';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { RepoRecommendationsList } from '@/features/repoRecommendationsList';
import { RepoDetailsComments } from '../RepoDetailsComments/RepoDetailsComments';
import cls from './RepoDetailsPage.module.scss';
import { repoDetailsPageReducer } from '../../model/slices';
import { RepoDetailsPageHeader } from '../RepoDetailsPageHeader/RepoDetailsPageHeader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { RepoRating } from '@/features/repoRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface RepoDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    repoDetailsPage: repoDetailsPageReducer,
};

const RepoDetailsPage = (props: RepoDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('repo-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page
                                className={classNames(
                                    cls.RepoDetailsPage,
                                    {},
                                    [className],
                                )}
                            >
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <RepoRecommendationsList />
                                    <RepoDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page
                        className={classNames(cls.RepoDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap="16" max>
                            <RepoDetailsPageHeader />
                            <RepoDetails id={id} />
                            <ToggleFeatures
                                feature="isRepoRatingEnabled"
                                on={<RepoRating repoId={id} />}
                                off={
                                    <Card>
                                        {t('Оценка репозиториев скоро появится!')}
                                    </Card>
                                }
                            />
                            <RepoRecommendationsList />
                            <RepoDetailsComments id={id} />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(RepoDetailsPage);
