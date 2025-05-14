import {z} from "zod";

export const usernameValidation = z
  .string()
  .min(2,"Username must be atleast more than 2 characters")
  .max(20,"User name must be under 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/,"Username must not contains special character") 


  export const signUpSchema = z.object({
    username:usernameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"Passwordd shouldd contain 6 characters"})
  })
  