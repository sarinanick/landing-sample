import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab, TabPanel } from "./Tabs";

const meta = { title: "Components/Tabs", component: Tabs, tags: ["autodocs"], args: { defaultValue: "profile", children: (<><Tab value="profile">پروفایل</Tab><Tab value="settings">تنظیمات</Tab><Tab value="billing">پرداخت</Tab><TabPanel value="profile">محتوای پروفایل</TabPanel><TabPanel value="settings">محتوای تنظیمات</TabPanel><TabPanel value="billing">محتوای پرداخت</TabPanel></>) } } satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
