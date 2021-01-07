import { Button } from "./button";
import {action} from '@storybook/addon-actions';

export default {
    title: 'PODS/button',
    argTypes: {
        label: {
            control: 'text',
            description: 'Rótulo do botão'
        },
        type: {
            control: { type: 'select', options: ['primary', 'secondary', 'default'] },
          },
        disabled: { control: 'boolean' },
        parameters: {
            actions: {
                handles: ['onClick', 'onClick'],
            },
        },

    },
};

const Template = ({ label, ...args }) => {
    return `
        <pods-button 
            label=${label} 
            type=${args.type} 
            disabled="${args.disabled}"
        >
        </pods-button>`;
};

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    label: 'Button',
    disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    label: 'Button',
    disabled: false
};

export const Default = Template.bind({});
Default.args = {
    type: 'default',
    label: 'Button',
    disabled: false
};