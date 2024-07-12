import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReposPageFilters } from './ReposPageFilters';

export default {
    title: 'pages/ReposPage/ReposPageFilters',
    component: ReposPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ReposPageFilters>;

const Template: ComponentStory<typeof ReposPageFilters> = (args) => (
    <ReposPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
