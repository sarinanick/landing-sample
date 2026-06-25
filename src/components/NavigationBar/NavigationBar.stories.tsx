import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from "./NavigationBar";

const meta = {
  title: "Components/NavigationBar",
  component: NavigationBar,
  tags: ["autodocs"],
  args: {
    value: "home",
    items: [
      { value: "home", label: "خانه", icon: "⌂" },
      { value: "search", label: "جستجو", icon: "🔎" },
      { value: "messages", label: "پیام‌ها", icon: "✉️", badge: 4 },
      { value: "profile", label: "پروفایل", icon: "👤" },
    ],
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithBadge: Story = {};
