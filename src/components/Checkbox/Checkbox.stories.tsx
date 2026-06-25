import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = { title: "Components/Checkbox", component: Checkbox, tags: ["autodocs"], args: { label: "پذیرش قوانین", supportingText: "برای ادامه باید قوانین را بپذیرید." } } satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Error: Story = { args: { error: true, errorText: "این گزینه الزامی است" } };
export const Disabled: Story = { args: { disabled: true } };
