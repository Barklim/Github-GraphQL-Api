import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '@/shared/ui/redesigned/Card';
import { RepoAdditionalInfo } from '@/widgets/RepoAdditionalInfo';
import { getRepoDetailsData } from '@/entities/Repo';
import cls from './AdditionalInfoContainer.module.scss';

export const AdditionalInfoContainer = memo(() => {
    const repo = useSelector(getRepoDetailsData);

    if (!repo) {
        return null;
    }

    return (
        <Card padding="24" border="partial" className={cls.card}>
            <RepoAdditionalInfo
                onEdit={() => {}}
                author={repo.user}
                updatedAt={repo.updatedAt}
                stars={repo.stars}
            />
        </Card>
    );
});
