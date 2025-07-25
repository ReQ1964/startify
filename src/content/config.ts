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
      keyOffering: z.string(),
      features: z.array(z.union([z.string(), z.record(z.array(z.string()))])),
      optionalModules: z.array(z.string()).optional(),
      profile: z.string(),
    }),
});

const summariesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    details: z.string(),
    price: z.string(),
  }),
});

export const collections = {
  hrPackages: packagesCollection,
  packagesSummaries: summariesCollection,
};
