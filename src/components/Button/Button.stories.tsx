import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "دکمه",
    variant: "filled",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};
export const Outlined: Story = { args: { variant: "outlined", children: "دکمه مرزی" } };
export const Text: Story = { args: { variant: "text", children: "دکمه متنی" } };
export const Disabled: Story = { args: { disabled: true, children: "غیرفعال" } };
