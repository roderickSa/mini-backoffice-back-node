import { createUserOpenApi } from './create-user';
import { getUserOpenApi } from './get-user';

export default {
  ...getUserOpenApi,
  ...createUserOpenApi,
};
