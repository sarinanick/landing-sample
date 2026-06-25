import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const suggestions = [
  { value: "shoes", label: "کفش ورزشی", supportingText: "۱۲۳ نتیجه", leadingIcon: "👟" },
  { value: "bag", label: "کیف چرمی", supportingText: "۴۲ نتیجه", leadingIcon: "👜" },
];

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  args: {
    placeholder: "جستجوی محصول",
    suggestions,
    recentSearches: ["کفش", "هدفون", "ساعت"],
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = { args: { loading: true, defaultValue: "کفش" } };
export const Disabled: Story = { args: { disabled: true } };
