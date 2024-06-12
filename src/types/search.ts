import { z } from 'zod';

// Define the schema for the search keywords
const searchKeywordsSchema = z.array(z.string());

// Export the inferred type for convenience
export type SearchKeywords = z.infer<typeof searchKeywordsSchema>;
export {searchKeywordsSchema}