import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const router = t.router({
  health: t.procedure.query(async () => {
    return { status: 'ok', message: 'CVLogic Server is running' };
  }),

  // CV Operations
  cv: t.router({
    upload: t.procedure
      .input(z.object({ fileName: z.string(), content: z.string() }))
      .mutation(async ({ input }) => {
        // TODO: Parse CV and store in database
        return { success: true, cvId: '1', message: `CV ${input.fileName} uploaded` };
      }),

    list: t.procedure.query(async () => {
      // TODO: Fetch user's CVs from database
      return { cvs: [] };
    }),
  }),

  // ATS Analysis
  ats: t.router({
    analyze: t.procedure
      .input(z.object({ cvId: z.string() }))
      .mutation(async ({ input }) => {
        // TODO: Run ATS analysis on CV
        return {
          cvId: input.cvId,
          atsScore: 85,
          suggestions: [],
          keywords: [],
        };
      }),
  }),

  // Orders
  order: t.router({
    create: t.procedure
      .input(z.object({ plan: z.enum(['basic', 'pro', 'premium', '24h']) }))
      .mutation(async ({ input }) => {
        // TODO: Create order in database
        return { orderId: '1', plan: input.plan, amount: 49 };
      }),
  }),
});

export type AppRouter = typeof router;
