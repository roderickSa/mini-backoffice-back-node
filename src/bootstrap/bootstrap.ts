import http from 'node:http';
import { bootstrapUserRouter } from '#bootstrap/routers';
import { bootstrapHttpServer } from '#bootstrap/http-server';

export function bootstrap(): http.Server {
  const userRouter = bootstrapUserRouter();

  const httpServer = bootstrapHttpServer(userRouter);

  return httpServer;
}
