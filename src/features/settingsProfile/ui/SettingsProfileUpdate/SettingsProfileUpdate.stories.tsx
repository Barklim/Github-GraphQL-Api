import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SettingsProfileHeader } from './SettingsProfileUpdate';

export default {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: SettingsProfileHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SettingsProfileHeader>;

const Template: ComponentStory<typeof SettingsProfileHeader> = (args) => (
    <SettingsProfileHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
