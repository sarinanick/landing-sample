import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {
    open: true,
    title: "حذف آیتم؟",
    supportingText: "این عملیات قابل بازگشت نیست.",
    actions: [
      { label: "انصراف", variant: "text" },
      { label: "حذف", variant: "filled" },
    ],
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const WithIcon: Story = { args: { icon: "⚠️" } };
export const Large: Story = { args: { size: "large", title: "دیالوگ بزرگ" } };
