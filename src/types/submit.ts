import { z } from 'zod';

const emailSchema = z.string().email({ message: 'Invalid email address' });

const linksSchema = z.string().min(1, { message: 'Description must be at least 1 characters long' });

const submitSchema = z.object({
    email: emailSchema,
    links: linksSchema
})

export type Email = z.infer<typeof emailSchema>;
export type Links = z.infer<typeof linksSchema>;
export type SubmitForm = z.infer<typeof submitSchema>;

export {emailSchema ,linksSchema ,submitSchema}