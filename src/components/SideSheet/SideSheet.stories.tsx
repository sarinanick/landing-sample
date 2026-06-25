import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../Checkbox";
import { SideSheet } from "./SideSheet";

const meta = { title: "Components/SideSheet", component: SideSheet, tags: ["autodocs"], args: { open: true, title: "فیلتر کاربران", description: "پنل کناری دسکتاپ", children: (<div style={{ display: "grid", gap: 16 }}><Checkbox label="فقط آنلاین" /><Checkbox label="اعضای فعال" /></div>), actions: [{ label: "پاک کردن" }, { label: "اعمال" }] } } satisfies Meta<typeof SideSheet>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Modal: Story = {};
export const Start: Story = { args: { position: "start" } };
export const Expanded: Story = { args: { width: "expanded" } };
