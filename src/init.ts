import { getEnvironment } from '#config/node-environment';
import http from 'node:http';
import { BootstrapAppConfig } from '#bootstrap/app-config';
import pino from 'pino';

const logger = pino({
  level: 'info'
});

function normalizePort(portArg: string): boolean | number {
  const parsed = parseInt(portArg, 10);
  return parsed > 0 ? parsed : false;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onError(error: any) {
  logger.error('#UNHANDLED ERROR:', error);
}

export function init(app: http.Server) {
  try {
    const config = BootstrapAppConfig.get();
    //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const env = getEnvironment();
    const port = normalizePort(config.server.port);

    app.on('error', onError);
    app.on('listening', () => {
      //eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      logger.info({ env, port }, 'Server running');
    });

    app.setTimeout(config.server.timeout);

    process.on('uncaughtException', onError);
    process.on('unhandledRejection', onError);

    app.listen(port);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
