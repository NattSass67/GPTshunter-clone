import { z } from 'zod';

const emailSchema = z.string().email({ message: 'Invalid email address' });

const linksSchema = z.string().min(1, { message: 'Description must be at least 1 characters long' });

const submitSchema = z.object({
    email: emailSchema,
    links: linksSchema
})

export {emailSchema ,linksSchema ,submitSchema}