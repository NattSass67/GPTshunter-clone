import { z } from 'zod';
import { cardBannerSchema } from './category';

// Define the schema for the search keywords
const searchKeywordsSchema = z.array(z.string());

const contentByQuerySchema = z.object({
    totalContent: z.number().min(0),
    content: z.array(cardBannerSchema),
  })

// Export the inferred type for convenience
export type SearchKeywords = z.infer<typeof searchKeywordsSchema>;
export {searchKeywordsSchema ,contentByQuerySchema}