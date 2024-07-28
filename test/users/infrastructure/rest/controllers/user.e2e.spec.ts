import { bootstrap } from '#bootstrap/bootstrap';
import { StatusCodes } from 'http-status-codes';
import http from 'http';
import supertest from 'supertest';
import { init } from '#init';
import { CreateUserUseCaseInput } from '#modules/users/use-cases/create-user/create-user.input';
import { CreateUserUserCaseInputMother } from '../../../use-cases/create-user/create-user.input.mother';
import { ConfigMother } from '../../../../config/config.mother';
import findFreePorts from 'find-free-ports';
import { BootstrapAppConfig } from '#bootstrap/app-config';
import { baseUrl } from '../../../../shared/infrastructure/rest/base-url';

describe("E2E - '/user'", () => {
  const endpoint = '/user';

  let port: number;
  let server: http.Server;

  let httpClient: supertest.SuperTest<supertest.Test>;

  beforeAll(async () => {
    await setUpServer();

    httpClient = supertest(baseUrl(port));
  });

  afterAll(() => {
    tearDownServer();
  });

  describe('GET - Get User', () => {
    test('should get a valid user', async () => {
      const response = await httpClient.get(endpoint + '/1234');
      expect(response.status).toBe(StatusCodes.OK);
    });

    test("shouldn't get a valid user", async () => {
      const response = await httpClient.get(endpoint + '/123');
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });
  });

  describe('POST - Create User', () => {
    test('should create a valid user', async () => {
      const input = new CreateUserUseCaseInput('roder', '1345678');
      const response = await httpClient.post(endpoint).send(input);
      expect(response.status).toBe(StatusCodes.CREATED);
    });
    
    test("shouldn't create a valid user", async () => {
      const response = await httpClient.post(endpoint).send(CreateUserUserCaseInputMother.any());
      expect(response.status).toBe(StatusCodes.UNAUTHORIZED);
    });
  });

  async function setUpServer() {
    try {
      [port] = await findFreePorts();
      const config = ConfigMother.defaultValues(port);
      BootstrapAppConfig.register(config);

      server = bootstrap();
      init(server);
    } catch (error) {
      console.error('Error creating the server: ', error);
      process.exit(1);
    }
  }

  function tearDownServer() {
    try {
      server.closeAllConnections();
      server.close();
    } catch (error) {
      console.error('Error closing the server: ', error);
    }
  }
});
