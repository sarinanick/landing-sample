import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta = { title: "Components/Divider", component: Divider, tags: ["autodocs"], args: { variant: "full" } } satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Full: Story = {};
export const Inset: Story = { args: { variant: "inset" } };
export const Middle: Story = { args: { variant: "middle" } };
export const Vertical: Story = { args: { orientation: "vertical" } };
