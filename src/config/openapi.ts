import { createDocument } from 'zod-openapi';
import doc from '#modules/users/infrastructure/rest/routes/openapi';

export const openApi = createDocument({
  openapi: '3.1.0',
  info: {
    version: '1.0.0',
    title: 'name-ms',
    description: 'name-ms documentation',
  },
  paths: {
    ...doc,
  },
  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Local server',
    },
    {
      url: 'http://stag.justo.cloud/name-ms',
      description: 'Staging server',
    },
  ],
});
