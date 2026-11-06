import { z } from 'astro/zod';

export const robotsSchema = z.object({
  index: z.boolean().optional(),
  follow: z.boolean().optional(),
  archive: z.boolean().optional(),
  snippet: z.boolean().optional(),
  imageIndex: z.boolean().optional(),
});

export const openGraphSchema = z.object({
  title: z.string().trim().min(1).optional(),
  description: z.string().trim().min(1).optional(),
  type: z.enum(["website", "article"]).optional(),
  url: z.url().optional(),
  image: z.url().optional(),
  imageAlt: z.string().trim().min(1).optional(),
  imageWidth: z.number().int().positive().optional(),
  imageHeight: z.number().int().positive().optional(),
  siteName: z.string().trim().min(1).optional(),
  locale: z.string().trim().regex(/^[a-z]{2}(?:[-_][A-Z]{2})?$/).optional(),
  alternateLocales: z.array(
    z.string().trim().regex(/^[a-z]{2}(?:[-_][A-Z]{2})?$/),
  ).min(1).optional(),
  article: z.object({
    publishedTime: z.coerce.date().optional(),
    modifiedTime: z.coerce.date().optional(),
    expirationTime: z.coerce.date().optional(),
    authors: z.array(z.url()).min(1).optional(),
    section: z.string().trim().min(1).optional(),
    tags: z.array(z.string().trim().min(1)).min(1).optional(),
  }).optional(),
});

export const twitterSchema = z.object({
  title: z.string().trim().min(1).optional(),
  description: z.string().trim().min(1).optional(),
  card: z.enum(["summary", "summary_large_image"]).optional(),
  image: z.url().optional(),
  imageAlt: z.string().trim().min(1).optional(),
  site: z.string().trim().min(1).optional(),
  creator: z.string().trim().min(1).optional(),
});

export const seoSchema = z.object({
  title: z.string().trim().min(1).max(60).optional(),
  description: z.string().trim().min(1).max(160).optional(),
  canonical: z.url().optional(),
  robots: robotsSchema.optional(),
  openGraph: openGraphSchema.optional(),
  twitter: twitterSchema.optional(),
});

export const seoFieldsSchema = z.object({
  seo: seoSchema.optional(),
});

// Requires alternative text whenever social metadata includes an image.
export const validateSeoFields = (
  fields: z.infer<typeof seoFieldsSchema>,
  context: z.RefinementCtx,
) => {
  if (fields.seo?.openGraph?.image && !fields.seo.openGraph.imageAlt) {
    context.addIssue({
      code: "custom",
      message: "imageAlt is required when an Open Graph image is provided",
      path: ["seo", "openGraph", "imageAlt"],
    });
  }

  if (fields.seo?.twitter?.image && !fields.seo.twitter.imageAlt) {
    context.addIssue({
      code: "custom",
      message: "imageAlt is required when a Twitter image is provided",
      path: ["seo", "twitter", "imageAlt"],
    });
  }
};
