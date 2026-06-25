import type { Preview } from "@storybook/react";
import "../src/styles/base.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#fffbff" },
        { name: "dark", value: "#1c1b1f" }
      ]
    },
    a11y: {
      test: "todo"
    }
  },
  globalTypes: {
    direction: {
      description: "Text direction",
      defaultValue: "rtl",
      toolbar: {
        title: "Direction",
        items: ["rtl", "ltr"],
      },
    },
  },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ minWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
