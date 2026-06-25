import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "./DatePicker";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    defaultValue: "2026-06-25",
    supportingText: "نسخه فعلی میلادی است.",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const WithMinMax: Story = { args: { min: "2026-06-01", max: "2026-06-30" } };
