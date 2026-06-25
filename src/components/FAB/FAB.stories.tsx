import type { Meta, StoryObj } from "@storybook/react";
import { FAB } from "./FAB";

const meta = { title: "Components/FAB", component: FAB, tags: ["autodocs"], args: { icon: "＋", ariaLabel: "افزودن", variant: "primary" } } satisfies Meta<typeof FAB>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Medium: Story = {};
export const Small: Story = { args: { size: "small" } };
export const Large: Story = { args: { size: "large" } };
export const Extended: Story = { args: { size: "extended", label: "افزودن" } };
