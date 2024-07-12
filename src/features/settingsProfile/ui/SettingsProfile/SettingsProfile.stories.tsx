import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SettingsProfile } from './SettingsProfile';

export default {
    title: 'features/settingsProfile/SettingsProfile',
    component: SettingsProfile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SettingsProfile>;

const Template: ComponentStory<typeof SettingsProfile> = (args) => (
    <SettingsProfile {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
