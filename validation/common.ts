import { z } from "zod";

export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 10,
  maxLimit: 100,
} as const;

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, "Email is required")
  .email("Invalid email address");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(64, "Password must be at most 64 characters")
  .regex(/[A-Z]/, "Must contain an uppercase letter")
  .regex(/[a-z]/, "Must contain a lowercase letter")
  .regex(/[0-9]/, "Must contain a number");

export const phoneSchema = z
  .string()
  .trim()
  .regex(/^(\+?88)?01[3-9]\d{8}$/, "Invalid Bangladeshi phone number");

export const idSchema = z.string().min(1, "ID is required");

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(PAGINATION.defaultPage),
  limit: z.coerce
    .number()
    .int()
    .min(1)
    .max(PAGINATION.maxLimit)
    .default(PAGINATION.defaultLimit),
  search: z.string().trim().optional(),
});

export type PaginationInput = z.infer<typeof paginationSchema>;