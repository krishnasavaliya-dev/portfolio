import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  problem: z.string(),
  contributions: z.array(z.string()),
  techStack: z.array(z.string()),
  outcomes: z.array(z.string()),
  timeframe: z.string(),
  role: z.string(),
  image: z.string(),
  category: z.array(z.string()),
});

export const timelineEventSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  company: z.string(),
  description: z.string(),
  type: z.enum(['internship', 'employment', 'project']),
  projectId: z.string().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type Project = z.infer<typeof projectSchema>;
export type TimelineEvent = z.infer<typeof timelineEventSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
