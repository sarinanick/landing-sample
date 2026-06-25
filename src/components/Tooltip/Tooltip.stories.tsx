import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";

const meta = { title: "Components/Tooltip", component: Tooltip, tags: ["autodocs"], args: { content: "توضیح کوتاه", children: <Button variant="outlined">نمایش Tooltip</Button> } } satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Top: Story = {};
export const Bottom: Story = { args: { placement: "bottom" } };
export const Rich: Story = { args: { rich: true, content: "توضیح کامل‌تر برای اکشن" } };
