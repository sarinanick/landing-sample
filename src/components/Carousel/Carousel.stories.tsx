import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Carousel } from "./Carousel";

const items = [
  { value: "1", title: "کفش ورزشی", subtitle: "پیشنهاد امروز", media: "👟", action: <Button variant="text">مشاهده</Button> },
  { value: "2", title: "هدفون بی‌سیم", subtitle: "تخفیف ویژه", media: "🎧", action: <Button variant="text">مشاهده</Button> },
  { value: "3", title: "ساعت هوشمند", subtitle: "محصول جدید", media: "⌚", action: <Button variant="text">مشاهده</Button> },
];

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  args: {
    items,
    variant: "cards",
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cards: Story = {};
export const Hero: Story = { args: { variant: "hero" } };
export const Compact: Story = { args: { variant: "compact" } };
