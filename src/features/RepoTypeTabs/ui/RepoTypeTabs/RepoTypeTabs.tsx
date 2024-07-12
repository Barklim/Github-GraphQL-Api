import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { RepoType } from '@/entities/Repo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface RepoTypeTabsProps {
    className?: string;
    value: RepoType;
    onChangeType: (type: RepoType) => void;
}

export const RepoTypeTabs = memo((props: RepoTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: RepoType.ALL,
                content: t('All langs'),
            },
            {
                value: RepoType.HTML,
                content: t('HTML'),
            },
            {
                value: RepoType.JAVASCRIPT,
                content: t('JAVASCRIPT'),
            },
            {
                value: RepoType.JAVA,
                content: t('JAVA'),
            },
            {
                value: RepoType.PYTHON,
                content: t('PYTHON'),
            },
            {
                value: RepoType.CSS,
                content: t('CSS'),
            },
            {
                value: RepoType.C,
                content: t('C'),
            },
            {
                value: RepoType.JUPITERNOTEBOOK,
                content: t('JUPITERNOTEBOOK'),
            },
            {
                value: RepoType.TYPESCRIPT,
                content: t('TYPESCRIPT'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as RepoType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    direction="column"
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
            off={
                <TabsDeprecated
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
});
