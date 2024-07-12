import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RepoDetailsComments } from './RepoDetailsComments';

export default {
    title: 'pages/RepoDetailsPage/RepoDetailsComments',
    component: RepoDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RepoDetailsComments>;

const Template: ComponentStory<typeof RepoDetailsComments> = (args) => (
    <RepoDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [StoreDecorator({})];
