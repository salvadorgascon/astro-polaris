import { z } from 'astro/zod';

export const contentFieldsSchema = z.object({
  slug: z.string()
    .trim()
    .min(1)
    .max(100)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must contain only lowercase letters, numbers, and hyphens",
    }),
  title: z.string().trim().min(1).max(60),
  description: z.string().trim().min(1).max(160),
  excerpt: z.string().optional(),
  featured: z.boolean().default(false),
});
