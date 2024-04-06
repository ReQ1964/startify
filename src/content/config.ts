import { z, defineCollection } from 'astro:content';

const packagesCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      description: z.string(),
      features: z.array(z.union([z.string(), z.record(z.array(z.string()))])),
      optionalModules: z.array(z.string()).optional(),
      duration: z.string(),
    }),
});

export const collections = {
  hrPackages: packagesCollection,
};
