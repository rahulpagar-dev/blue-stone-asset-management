import { hashPassword, verifyUser, findUserByEmail, createUser } from "@/lib/auth";

describe("auth utilities", () => {
  it("hashes and verifies passwords", () => {
    const password = "test-password";
    const hashed = hashPassword(password);

    expect(hashed).toBe(hashPassword(password));
    expect(verifyUser("investor@bluestone.com", "BlueStone123!")).not.toBeNull();
    expect(findUserByEmail("investor@bluestone.com")).toBeDefined();
  });

  it("creates a new user", () => {
    const user = createUser("Test", "User", "new@example.com", "test1234");

    expect(user.email).toBe("new@example.com");
    expect(findUserByEmail("new@example.com")).toBeDefined();
  });
});
