import type { Meta, StoryObj } from "@storybook/react";
import { LinearProgress, CircularProgress } from "./Progress";

const meta = { title: "Components/Progress/Linear", component: LinearProgress, tags: ["autodocs"], args: { value: 45, label: "بارگذاری" } } satisfies Meta<typeof LinearProgress>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Linear: Story = {};
export const LinearIndeterminate: Story = { args: { indeterminate: true } };
export const Circular: Story = { render: () => <CircularProgress value={65} label="پیشرفت" /> };
export const CircularIndeterminate: Story = { render: () => <CircularProgress indeterminate size="large" /> };
