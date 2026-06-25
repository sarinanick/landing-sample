import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, Radio } from "./Radio";

const meta = { title: "Components/RadioGroup", component: RadioGroup, tags: ["autodocs"], args: { name: "plan", defaultValue: "basic", children: (<><Radio value="basic" label="پایه" /><Radio value="pro" label="حرفه‌ای" /><Radio value="team" label="تیمی" /></>) } } satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Error: Story = { args: { error: true } };
export const DisabledItem: Story = { args: { children: (<><Radio value="basic" label="پایه" /><Radio value="pro" label="حرفه‌ای" disabled /><Radio value="team" label="تیمی" /></>) } };
