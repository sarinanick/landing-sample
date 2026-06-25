import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta = { title: "Components/Slider", component: Slider, tags: ["autodocs"], args: { label: "شدت صدا", defaultValue: 45 } } satisfies Meta<typeof Slider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Price: Story = { args: { label: "قیمت", min: 0, max: 1000000, step: 50000, defaultValue: 350000, valueFormatter: (v: number) => `${v.toLocaleString("fa-IR")} تومان` } };
export const Disabled: Story = { args: { disabled: true } };
