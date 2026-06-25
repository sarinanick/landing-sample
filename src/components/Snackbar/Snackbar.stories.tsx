import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "./Snackbar";

const meta = { title: "Components/Snackbar", component: Snackbar, tags: ["autodocs"], args: { open: true, message: "تغییرات ذخیره شد." } } satisfies Meta<typeof Snackbar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Neutral: Story = {};
export const Success: Story = { args: { tone: "success", message: "با موفقیت انجام شد." } };
export const Error: Story = { args: { tone: "error", message: "خطایی رخ داد." } };
export const WithAction: Story = { args: { actionLabel: "بازگشت" } };
