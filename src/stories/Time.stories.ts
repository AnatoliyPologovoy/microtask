import type { Meta, StoryObj } from '@storybook/react';
// import { SelectsWithMemoPropsType} from "../components/SelectsWithMemo";
import Timer from "../components/Timer";


const meta: Meta<any> = {
    title: 'Timer',
    component: Timer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};

export default meta;

type Story = StoryObj<any>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Start: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    // args: {
    //     itemId: "we",
    //     addItem: (x) => x
    // },
};