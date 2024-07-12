import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RepoViewSelector } from './RepoStarSelector';

export default {
    title: 'features/RepoViewSelector',
    component: RepoViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoViewSelector>;

const Template: ComponentStory<typeof RepoViewSelector> = (args) => (
    <RepoViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
