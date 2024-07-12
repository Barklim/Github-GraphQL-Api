import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RepoSortSelector } from './RepoSortSelector';

export default {
    title: 'features/RepoSortSelector',
    component: RepoSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoSortSelector>;

const Template: ComponentStory<typeof RepoSortSelector> = (args) => (
    <RepoSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
