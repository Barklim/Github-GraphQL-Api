import { RepoBlock } from '../../model/types/repo';
import { RepoBlockType } from '../../model/consts/repoConsts';
import { RepoCodeBlockComponent } from '../RepoCodeBlockComponent/RepoCodeBlockComponent';
import cls from './RepoDetails.module.scss';
import { RepoImageBlockComponent } from '../RepoImageBlockComponent/RepoImageBlockComponent';
import { RepoTextBlockComponent } from '../RepoTextBlockComponent/RepoTextBlockComponent';

export const renderRepoBlock = (block: RepoBlock) => {
    switch (block.type) {
        case RepoBlockType.CODE:
            return (
                <RepoCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case RepoBlockType.IMAGE:
            return (
                <RepoImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case RepoBlockType.TEXT:
            return (
                <RepoTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
    }
};
