import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "./List";
import { Avatar } from "../Avatar";

const meta = { title: "Components/List", component: List, tags: ["autodocs"], args: { density: "two-line", dividers: true, children: (<><ListItem headline="سارا محمدی" supportingText="طراح محصول" leading={<Avatar name="سارا محمدی" />} trailing="فعال" interactive /><ListItem headline="رضا کریمی" supportingText="توسعه‌دهنده" leading={<Avatar name="رضا کریمی" />} trailing="مشاهده" interactive /></>) } } satisfies Meta<typeof List>;
export default meta;
type Story = StoryObj<typeof meta>;
export const TwoLine: Story = {};
export const OneLine: Story = { args: { density: "one-line" } };
export const ThreeLine: Story = { args: { density: "three-line" } };
