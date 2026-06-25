import type { Meta, StoryObj } from "@storybook/react";
import { TimePicker } from "./TimePicker";

const meta = {
  title: "Components/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  args: {
    defaultValue: "09:30",
    supportingText: "انتخاب زمان",
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwentyFourHour: Story = {};
export const TwelveHour: Story = { args: { mode: "12h", defaultValue: "14:15" } };
export const Disabled: Story = { args: { disabled: true } };
