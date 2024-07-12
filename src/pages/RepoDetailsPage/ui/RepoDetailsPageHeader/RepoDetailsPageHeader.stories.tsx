import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RepoDetailsPageHeader } from './RepoDetailsPageHeader';

export default {
    title: 'pages/RepoDetailsPage/RepoDetailsPageHeader',
    component: RepoDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoDetailsPageHeader>;

const Template: ComponentStory<typeof RepoDetailsPageHeader> = (args) => (
    <RepoDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
