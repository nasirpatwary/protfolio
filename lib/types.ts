import { z } from "zod"


export const formSchema = z.object({
  name: z
    .string()
    .min(5, "must be at least 5 characters.")
    .max(32, "must be at most 32 characters."),
  email: z
    .string()
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .min(6, "Subject must be at least 6 characters.")
    .max(26, "Subject must be at most 26 characters."), 
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(150, "Message must be at most 150 characters."),
});

// ২. জড স্কিমা থেকে টাইপটি বের করুন (Inference)
export type FormData = z.infer<typeof formSchema>;
 
