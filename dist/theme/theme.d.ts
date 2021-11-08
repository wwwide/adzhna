import { ButtonTheme } from '../components/Button';
import { CardTheme } from '../components/Card';
import { DialogTheme } from '../components/Dialog';
import { InputTheme } from '../components/Input';
import { PaginationTheme } from '../components/Pagination';
export declare type Theme = {
    adzhna: {
        colors: {
            primary: {
                fill: {
                    normal: string;
                    hover: string;
                    active: string;
                };
                text: {
                    normal: string;
                    hover: string;
                    active: string;
                };
            };
            secondary: {
                fill: {
                    normal: string;
                    hover: string;
                    active: string;
                };
                text: {
                    normal: string;
                    hover: string;
                    active: string;
                };
            };
            text: string;
            textSecondary: string;
            success: {
                fill: {
                    normal: string;
                    hover: string;
                    active: string;
                };
                text: {
                    normal: string;
                    hover: string;
                    active: string;
                };
            };
            warning: {
                fill: {
                    normal: string;
                    hover: string;
                    active: string;
                };
                text: {
                    normal: string;
                    hover: string;
                    active: string;
                };
            };
            danger: {
                fill: {
                    normal: string;
                    hover: string;
                    active: string;
                };
                text: {
                    normal: string;
                    hover: string;
                    active: string;
                };
            };
            light: {
                fill: {
                    normal: string;
                    hover: string;
                    active: string;
                };
                text: {
                    normal: string;
                    hover: string;
                    active: string;
                };
            };
            disabled: {
                fill: string;
                text: string;
            };
            error: {
                fill: string;
                text: string;
            };
            link: {
                fill: {
                    normal: string;
                    hover: string;
                    active: string;
                };
                text: {
                    normal: string;
                    hover: string;
                    active: string;
                };
            };
        };
        fonts: {
            family: string;
            size: number;
        };
        borders: {
            radius: number;
            color: string;
        };
        base: {
            outline: {
                width: number;
                style: string;
                color: string;
            };
        };
        components: {
            button: ButtonTheme;
            card: CardTheme;
            dialog: DialogTheme;
            input: InputTheme;
            pagination: PaginationTheme;
        };
    };
};
