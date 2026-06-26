import { test, expect } from "@playwright/test";

test.describe("Auth flow", () => {
  test("signup and login pages render", async ({ page }) => {
    await page.goto("/auth/signup");
    await expect(page.locator("h1")).toHaveText("Create a new account");

    await page.goto("/auth/login");
    await expect(page.locator("h1")).toHaveText("Login");
  });
});
