import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { RepoDetails } from '@/entities/Repo';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainterProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainterProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card fullWidth border="partial" className={className} padding="24">
            <RepoDetails id={id} />
        </Card>
    );
});
