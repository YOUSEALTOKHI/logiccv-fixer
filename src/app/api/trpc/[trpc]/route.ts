import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { router } from '@/server/trpc';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router,
    createContext: () => ({}),
  });

export const GET = handler;
export const POST = handler;
