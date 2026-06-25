import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = { title: "Components/Avatar", component: Avatar, tags: ["autodocs"], args: { name: "علی تابعی", size: "medium" } } satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Initials: Story = {};
export const Large: Story = { args: { size: "large" } };
export const Status: Story = { args: { status: "online" } };
export const Icon: Story = { args: { icon: "👤", name: "پشتیبانی" } };
