import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReposPage from './ReposPage';

export default {
    title: 'pages/ReposPage/ReposPage',
    component: ReposPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ReposPage>;

const Template: ComponentStory<typeof ReposPage> = (args) => (
    <ReposPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
