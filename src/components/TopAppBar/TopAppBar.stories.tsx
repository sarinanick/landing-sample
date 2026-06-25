import type { Meta, StoryObj } from "@storybook/react";
import { TopAppBar } from "./TopAppBar";

const meta = { title: "Components/TopAppBar", component: TopAppBar, tags: ["autodocs"], args: { title: "عنوان صفحه", navigationIcon: "←", actions: [{ icon: "🔎", label: "جستجو" }, { icon: "⋮", label: "بیشتر" }] } } satisfies Meta<typeof TopAppBar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Small: Story = {};
export const Medium: Story = { args: { variant: "medium", subtitle: "زیرعنوان" } };
export const Large: Story = { args: { variant: "large", subtitle: "زیرعنوان" } };
export const Elevated: Story = { args: { elevated: true } };
