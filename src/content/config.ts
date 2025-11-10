import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['android', 'ml', 'web']),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        date: z.date(),
        image: z.string().optional(),
        repoUrl: z.string().optional(),
        apkUrl: z.string().optional(),
        liveUrl: z.string().optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
};