import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RepoRating from './RepoRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/RepoRating',
    component: RepoRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoRating>;

const Template: ComponentStory<typeof RepoRating> = (args) => (
    <RepoRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    repoId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/repo-ratings?userId=1&repoId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    repoId: '1',
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/repo-ratings?userId=1&repoId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
