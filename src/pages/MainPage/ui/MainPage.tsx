import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            <VStack gap='16'>
                <span>
                    {t('Главная страница:описание')}
                </span>
                <span>
                    {t('Главная страница:строка')}:
                </span>
                <span>
                    1.&nbsp;&nbsp;{t('Главная страница:креды')}
                </span>
                <span>
                    2.&nbsp;&nbsp;{t('Главная страница:креды админа')}
                </span>
                <span>
                    2.&nbsp;&nbsp;{t('Главная страница:креды мэнеджера')}
                </span>
                <span>
                    2.&nbsp;&nbsp;{t('Главная страница:креды тест')}
                </span>
            </VStack>
            
        </Page>
    );
};

export default MainPage;
