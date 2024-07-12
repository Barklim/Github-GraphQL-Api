import { User } from '@/entities/User';
import { RepoBlockType, RepoType } from '../consts/repoConsts';

export interface RepoBlockBase {
    id: string;
    type: RepoBlockType;
}

export interface RepoCodeBlock extends RepoBlockBase {
    type: RepoBlockType.CODE;
    code: string;
}

export interface RepoImageBlock extends RepoBlockBase {
    type: RepoBlockType.IMAGE;
    src: string;
    title: string;
}

export interface RepoTextBlock extends RepoBlockBase {
    type: RepoBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type RepoBlock =
    | RepoCodeBlock
    | RepoImageBlock
    | RepoTextBlock;

export interface Repo {
    id: string;
    nameWithOwner: string;
    title: string;
    shortDescriptionHTML: string;
    stars: number;
    updatedAt: string;
    languages: RepoType[];
    primaryLanguage: RepoType;
    blocks: RepoBlock[];
    user: User;
}
