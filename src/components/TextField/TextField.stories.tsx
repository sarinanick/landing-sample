import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    label: "نام کاربری",
    placeholder: "نام کاربری را وارد کنید",
    variant: "outlined",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {};
export const Filled: Story = { args: { variant: "filled" } };
export const Error: Story = { args: { error: true, errorText: "این فیلد الزامی است" } };
export const Disabled: Story = { args: { disabled: true } };
