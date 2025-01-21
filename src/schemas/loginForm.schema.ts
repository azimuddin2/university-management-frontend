import { z } from 'zod';

export const loginFormSchema = z.object({
  userId: z.string({
    required_error: 'User id is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
});
