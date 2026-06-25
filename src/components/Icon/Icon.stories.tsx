import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    children: "🔎",
    size: "medium",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {};
export const Large: Story = { args: { size: "large", children: "⚙️" } };
export const Labeled: Story = { args: { decorative: false, label: "جستجو", children: "🔎" } };
