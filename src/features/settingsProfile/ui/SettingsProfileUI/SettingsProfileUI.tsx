import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

export const SettingsProfileUI = memo(
    () => {
        const { t } = useTranslation('profile');

        return (
            <VStack gap="32"  max>
                <VStack gap="16" max>
                    <Text title={t('Theme settings')} subHead/>
                    <UiDesignSwitcher />
                    <HStack gap="4">
                        <Text text={t('Choosing a theme')} /> : <ThemeSwitcher />
                    </HStack>
                </VStack>

                <VStack gap="16" max>
                    <Text title={t('Language settings')} subHead/>
                    <HStack gap="4">
                        <Text text={t('Choosing a language')} /> : <LangSwitcher short={false}/>
                    </HStack>
                </VStack>
            </VStack>
        );
    },
);
