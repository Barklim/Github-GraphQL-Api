import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Repo, RepoType } from '@/entities/Repo';
import { RepoRecommendationsList } from './RepoRecommendationsList';

export default {
    title: 'features/RepoRecommendationsList',
    component: RepoRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoRecommendationsList>;

const Template: ComponentStory<typeof RepoRecommendationsList> = (args) => (
    <RepoRecommendationsList {...args} />
);

const repo: Repo = {
    id: '1',
    updatedAt: '',
    stars: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    languages: [],
    title: '123',
    shortDescriptionHTML: 'some shortDescriptionHTML ...',
    primaryLanguage: RepoType.HTML,
    nameWithOwner: 'user/test',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/repos?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...repo, id: '1' },
                { ...repo, id: '2' },
                { ...repo, id: '3' },
            ],
        },
    ],
};
