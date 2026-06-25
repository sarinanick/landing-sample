import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "عنوان کارت",
    subtitle: "زیرعنوان کارت",
    children: "این یک کارت نمونه برای بررسی ظاهر و فاصله‌گذاری است.",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = { args: { variant: "filled" } };
export const Outlined: Story = { args: { variant: "outlined" } };
export const Elevated: Story = { args: { variant: "elevated" } };
export const WithActions: Story = {
  args: {
    actions: <Button variant="text">مشاهده</Button>,
  },
};
