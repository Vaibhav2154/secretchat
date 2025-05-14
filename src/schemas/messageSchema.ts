import { z } from "zod";

export const messagechema = z.object({
    content: z.string().min(10,{message:"Message shouldd be atleast more than 10 characters"})
    .max(300,{message:"Message should be not more than 300 characters"})
  })
