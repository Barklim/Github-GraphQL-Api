import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const SettingsProfileHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;

        const { t } = useTranslation('profile');
        const dispatch = useAppDispatch();

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Button
                        onClick={onSave}
                        variant="filled"
                        data-testid="EditableProfileCardHeader.SaveButton"
                        color="success"
                    >
                        {t('Update profile')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSave}
                        data-testid="EditableProfileCardHeader.SaveButton"
                    >
                        {t('Сохранить')}
                    </ButtonDeprecated>
                }
            />
        );
    },
);
