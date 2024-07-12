import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/redesigned/Code';
import cls from './RepoCodeBlockComponent.module.scss';
import { RepoCodeBlock } from '../../model/types/repo';

interface RepoCodeBlockComponentProps {
    className?: string;
    block: RepoCodeBlock;
}

export const RepoCodeBlockComponent = memo(
    (props: RepoCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.RepoCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    },
);
