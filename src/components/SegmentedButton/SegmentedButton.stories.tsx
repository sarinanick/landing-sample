import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedButtonGroup, SegmentedButtonItem } from "./SegmentedButton";

const meta = { title: "Components/SegmentedButton", component: SegmentedButtonGroup, tags: ["autodocs"], args: { value: "list", children: (<><SegmentedButtonItem value="list" icon="☰">لیست</SegmentedButtonItem><SegmentedButtonItem value="grid" icon="▦">شبکه</SegmentedButtonItem><SegmentedButtonItem value="map" icon="📍">نقشه</SegmentedButtonItem></>) } } satisfies Meta<typeof SegmentedButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Single: Story = {};
export const Compact: Story = { args: { density: "compact" } };
export const Multi: Story = { args: { multiple: true, value: ["available"], children: (<><SegmentedButtonItem value="available">موجود</SegmentedButtonItem><SegmentedButtonItem value="discount">تخفیف‌دار</SegmentedButtonItem><SegmentedButtonItem value="fast">ارسال سریع</SegmentedButtonItem></>) } };
