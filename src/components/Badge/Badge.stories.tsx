import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeAnchor } from "./Badge";
import { IconButton } from "../IconButton";

const meta = { title: "Components/Badge", component: Badge, tags: ["autodocs"], args: { content: 4 } } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Large: Story = {};
export const Small: Story = { args: { variant: "small", content: undefined } };
export const Anchored: Story = { render: () => <BadgeAnchor badgeContent={8}><IconButton label="اعلان‌ها" icon="🔔" /></BadgeAnchor> };
