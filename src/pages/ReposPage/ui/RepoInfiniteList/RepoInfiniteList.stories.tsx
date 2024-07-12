import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RepoInfiniteList } from './RepoInfiniteList';

export default {
    title: 'pages/ReposPage/RepoInfiniteList',
    component: RepoInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoInfiniteList>;

const Template: ComponentStory<typeof RepoInfiniteList> = (args) => (
    <RepoInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
