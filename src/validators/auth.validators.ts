import { z } from "zod";

const nameSchema = z
  .string()
  .min(2, "Name must be at least 2 characters long")
  .max(50, "Name cannot exceed 50 characters")
  .trim()
  .regex(
    /^[a-zA-ZÀ-ÿ\s'-]+$/,
    "Name can only contain letters, spaces, hyphens, and apostrophes",
  );

const emailSchema = z
  .email()
  .min(1, "Email is required")
  .toLowerCase()
  .trim()
  .regex(
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    "Please enter a valid email address",
  )
  .refine((email) => email.length <= 254, { message: "Email is too long" });

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(100, "Password is too long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=\[\]{};':"\\|,.<>\/])/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&#()_+-=[]{};':^},.)",
  );

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export const signupSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
