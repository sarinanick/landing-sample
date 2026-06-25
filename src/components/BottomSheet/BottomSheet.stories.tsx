import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "../List";
import { BottomSheet } from "./BottomSheet";

const meta = { title: "Components/BottomSheet", component: BottomSheet, tags: ["autodocs"], args: { open: true, title: "فیلترها", description: "گزینه‌های مورد نظر را انتخاب کنید.", children: (<List><ListItem headline="ارسال رایگان" leading="🚚" /><ListItem headline="تخفیف‌دار" leading="٪" /></List>), actions: [{ label: "پاک کردن" }, { label: "اعمال" }] } } satisfies Meta<typeof BottomSheet>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Modal: Story = {};
export const Half: Story = { args: { height: "half" } };
export const Full: Story = { args: { height: "full" } };
