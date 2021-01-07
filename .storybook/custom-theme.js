import { create } from '@storybook/theming/create';

export const customTheme = create({
    base: 'dark',

    colorSecondary: '#c9357d',

    appBg: '#0b0a0d',
    appContentBg: '#16161A',
    appBorderColor: '#c9357d',

    textColor: '#fff',

    // Toolbar default and active colors
    barTextColor: '#E6E6E6',
    barSelectedColor: '#ffffff',
    barBg: '#1b1a1f',

    brandTitle: 'PODS',
    brandUrl: 'http://po-ui.io',
});