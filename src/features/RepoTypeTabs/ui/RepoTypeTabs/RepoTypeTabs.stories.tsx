import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RepoTypeTabs } from './RepoTypeTabs';

export default {
    title: 'features/RepoTypeTabs',
    component: RepoTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoTypeTabs>;

const Template: ComponentStory<typeof RepoTypeTabs> = (args) => (
    <RepoTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
