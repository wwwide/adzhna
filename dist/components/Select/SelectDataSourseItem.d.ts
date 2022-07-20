import { ReactNode } from 'react';
export declare type SelectDatasourceItem<ValueType> = {
    label: ReactNode;
    value: ValueType;
    searchLabel?: string;
};
