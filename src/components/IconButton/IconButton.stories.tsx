import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    icon: "🔎",
    label: "جستجو",
    variant: "standard",
    size: "medium",
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
export const Filled: Story = { args: { variant: "filled", icon: "＋", label: "افزودن" } };
export const Tonal: Story = { args: { variant: "tonal", icon: "🔔", label: "اعلان‌ها" } };
export const Outlined: Story = { args: { variant: "outlined", icon: "⚙️", label: "تنظیمات" } };
export const Selected: Story = { args: { selected: true, icon: "♡", selectedIcon: "♥", label: "پسندیدن" } };
export const Disabled: Story = { args: { disabled: true } };
