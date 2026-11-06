import { z } from 'astro/zod';

export const authorSchema = z.object({
  name: z.string().trim().min(1),
  profileUrl: z.url().optional(),
  avatarUrl: z.url().optional(),
});

export const publishFieldsSchema = z.object({
  author: authorSchema.optional(),
  status: z.enum(["draft", "published"]).default("draft"),
  createdAt: z.coerce.date(),
  publishedAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

// Validates chronological publishing dates and required publication metadata.
export const validatePublishFields = (
  publish: z.infer<typeof publishFieldsSchema>,
  context: z.RefinementCtx,
) => {
  if (publish.status === "published" && !publish.publishedAt) {
    context.addIssue({
      code: "custom",
      message: "publishedAt is required when status is published",
      path: ["publishedAt"],
    });
  }

  if (publish.publishedAt && publish.publishedAt < publish.createdAt) {
    context.addIssue({
      code: "custom",
      message: "publishedAt cannot be earlier than createdAt",
      path: ["publishedAt"],
    });
  }

  if (publish.updatedAt && publish.updatedAt < publish.createdAt) {
    context.addIssue({
      code: "custom",
      message: "updatedAt cannot be earlier than createdAt",
      path: ["updatedAt"],
    });
  }
};
