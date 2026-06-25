import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta = { title: "Components/Chip", component: Chip, tags: ["autodocs"], args: { children: "فیلتر", variant: "filter" } } satisfies Meta<typeof Chip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Filter: Story = {};
export const Assist: Story = { args: { variant: "assist", children: "راهنما" } };
export const Suggestion: Story = { args: { variant: "suggestion", children: "پیشنهاد" } };
export const Selected: Story = { args: { selected: true, children: "انتخاب‌شده" } };
export const Disabled: Story = { args: { disabled: true } };
