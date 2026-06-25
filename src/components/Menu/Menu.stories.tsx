import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Menu } from "./Menu";

const meta = { title: "Components/Menu", component: Menu, tags: ["autodocs"], args: { defaultOpen: true, trigger: <Button variant="outlined">باز کردن منو</Button>, items: [{ value: "edit", label: "ویرایش", leadingIcon: "✏️" }, { value: "copy", label: "کپی", leadingIcon: "⧉" }, { value: "delete", label: "حذف", leadingIcon: "🗑", destructive: true }] } } satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const BottomEnd: Story = { args: { placement: "bottom-end" } };
