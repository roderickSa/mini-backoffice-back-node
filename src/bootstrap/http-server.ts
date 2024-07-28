import http from 'node:http';
import express, { Application } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import { NodeEnvironment } from '#config/node-environment';
import swaggerUi from 'swagger-ui-express';
import { openApi } from '#config/openapi';
import { parseZodErrors } from '#modules/shared/infrastructure/middlewares/parse-zod-errors.middleware';
import { UserRouter } from '#modules/users/infrastructure/rest/routes/user';
import { BootstrapAppConfig } from '#bootstrap/app-config';

export function bootstrapHttpServer(userRouter: UserRouter): http.Server {
  const config = BootstrapAppConfig.get();
  const app: Application = express();

  app.disable('x-powered-by');

  // Middlewares
  app.use(cors());
  app.use(bodyParser.json({ limit: '15mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));

  const { environment } = config.node;
  if (environment !== NodeEnvironment.Production) {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApi));
  }

  // Routers
  app.use('/api/user', userRouter.router, parseZodErrors);

  return http.createServer(app);
}
