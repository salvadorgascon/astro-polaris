import { z } from 'astro/zod';

export const categoryValues = [
  "astro",
  "web-development",
  "web-design",
] as const;

export const tagValues = [
  "typescript",
  "tailwind-css",
  "mdx",
  "content-collections",
  "components",
  "seo",
  "responsive-design",
  "accessibility",
  "performance",
] as const;

export const taxonomyFieldsSchema = z.object({
  categories: z.array(z.enum(categoryValues)).min(1).optional(),
  tags: z.array(z.enum(tagValues)).min(1).optional(),
});
