import { test, expect } from "@playwright/test";

test.describe("visual smoke scaffold", () => {
  test("storybook should render button story", async ({ page }) => {
    await page.goto("http://localhost:6006/?path=/story/components-button--filled");
    await expect(page.locator("body")).toBeVisible();
  });
});
