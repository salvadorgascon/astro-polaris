import type { SchemaContext } from 'astro:content';
import { z } from 'astro/zod';

// Defines optional local or remote cover image metadata.
export const coverSchema = ({ image }: SchemaContext) => z.object({
  // Local images are imported and optimized by Astro.
  image: image().optional(),
  // External images are kept as URLs and are not imported by Astro.
  imageUrl: z.url().optional(),
  imageAlt: z.string().trim().min(1).optional(),
});

// Wraps cover metadata in the content field structure.
export const coverFieldsSchema = (context: SchemaContext) =>
  z.object({
    cover: coverSchema(context).optional(),
  });

// Validates that cover images have one source and accessible alternative text.
export const validateCoverFields = (
  fields: z.infer<ReturnType<typeof coverFieldsSchema>>,
  context: z.RefinementCtx,
) => {
  if (!fields.cover) return;

  const hasLocalImage = !!fields.cover.image;
  const hasRemoteImage = !!fields.cover.imageUrl;

  if (hasLocalImage === hasRemoteImage) {
    context.addIssue({
      code: "custom",
      message: "Provide exactly one of image or imageUrl",
      path: ["cover", "image"],
    });
  }

  if ((hasLocalImage || hasRemoteImage) && !fields.cover.imageAlt) {
    context.addIssue({
      code: "custom",
      message: "imageAlt is required when a cover image is provided",
      path: ["cover", "imageAlt"],
    });
  }
};
