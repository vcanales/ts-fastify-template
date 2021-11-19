import { FastifyInstance } from 'fastify';
import { build } from '../';

describe('stuff', () => {
  let app: FastifyInstance;
  beforeAll(() => {
    app = build();
  });
  afterAll(() => app.close());

  test('require / route', async () => {
    const expected = { hello: 'world' };

    const response = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.payload)).toEqual(expected);
  });
});
