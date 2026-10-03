// NEXT_PUBLIC_ vars must be referenced statically so Next.js can inline them
const required = (value: string | undefined, name: string): string => {
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
};

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  Backend_URL: required(process.env.Backend_URL, "Backend_URL"),
  isProd: process.env.NODE_ENV === "production",
  isDev: process.env.NODE_ENV === "development",

  // Public (client + server)
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  API_URL: required(process.env.NEXT_PUBLIC_API_URL, "NEXT_PUBLIC_API_URL"),

 
} as const;