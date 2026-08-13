import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		author: z.string().optional(),
		tags: z.array(z.string()).optional(),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		date: z.coerce.date(),
	}),
});

export const collections = { blog };
