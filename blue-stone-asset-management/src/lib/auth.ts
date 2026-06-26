import { createHash, randomUUID } from "crypto";

export type AppUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

export type DashboardPayload = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  portfolio: {
    totalValue: string;
    dailyChange: string;
    availableCash: string;
    investedAssets: string;
  };
  products: Array<{ title: string; holding: string; change: string; percentage: number }>;
  allocation: Array<{ label: string; value: number }>;
};

const users = new Map<string, AppUser>();
const sessions = new Map<string, string>();

const defaultUser: AppUser = {
  id: "user-1",
  firstName: "Alex",
  lastName: "Mason",
  email: "investor@bluestone.com",
  passwordHash: hashPassword("BlueStone123!"),
  createdAt: new Date().toISOString(),
};

users.set(defaultUser.email, defaultUser);

export function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export function findUserByEmail(email: string): AppUser | undefined {
  return users.get(email.toLowerCase());
}

export function createUser(firstName: string, lastName: string, email: string, password: string): AppUser {
  const normalizedEmail = email.toLowerCase();
  const user: AppUser = {
    id: randomUUID(),
    firstName,
    lastName,
    email: normalizedEmail,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
  };

  users.set(normalizedEmail, user);
  return user;
}

export function verifyUser(email: string, password: string): AppUser | null {
  const user = findUserByEmail(email);

  if (!user) {
    return null;
  }

  return user.passwordHash === hashPassword(password) ? user : null;
}

export function createSession(user: AppUser): string {
  const token = randomUUID();
  sessions.set(token, user.email);
  return token;
}

export function getUserFromSession(token: string | undefined): AppUser | null {
  if (!token) {
    return null;
  }

  const email = sessions.get(token);

  if (!email) {
    return null;
  }

  return findUserByEmail(email) ?? null;
}

export function getDashboardPayload(user: AppUser): DashboardPayload {
  return {
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    portfolio: {
      totalValue: "$1,250,400",
      dailyChange: "+$4,120",
      availableCash: "$82,500",
      investedAssets: "5 products",
    },
    products: [
      { title: "Gold", holding: "$190,300", change: "+2.3%", percentage: 15 },
      { title: "Silver", holding: "$95,800", change: "+1.8%", percentage: 10 },
      { title: "ETF", holding: "$520,700", change: "+0.9%", percentage: 42 },
      { title: "Crypto", holding: "$136,600", change: "-1.2%", percentage: 18 },
    ],
    allocation: [
      { label: "Equities & ETFs", value: 42 },
      { label: "Crypto", value: 18 },
      { label: "Gold", value: 15 },
      { label: "Silver", value: 10 },
      { label: "Cash", value: 15 },
    ],
  };
}
