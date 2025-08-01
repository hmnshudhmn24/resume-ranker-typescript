import { z } from 'zod';

export const resumeSchema = z.object({
  content: z.string().min(20)
});

export function validateResume(text: string) {
  return resumeSchema.parse({ content: text });
}