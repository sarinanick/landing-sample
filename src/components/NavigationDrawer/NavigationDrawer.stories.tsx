import type { Meta, StoryObj } from "@storybook/react";
import { NavigationDrawer } from "./NavigationDrawer";

const meta = { title: "Components/NavigationDrawer", component: NavigationDrawer, tags: ["autodocs"], args: { value: "dashboard", headline: "سیستم فارسی", sections: [{ items: [{ value: "dashboard", label: "داشبورد", icon: "📊" }, { value: "users", label: "کاربران", icon: "👥", badge: 4 }, { value: "settings", label: "تنظیمات", icon: "⚙️" }] }] } } satisfies Meta<typeof NavigationDrawer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Modal: Story = { args: { variant: "modal", open: true } };
