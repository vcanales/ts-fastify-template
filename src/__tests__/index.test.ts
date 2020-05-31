import Fastify from 'fastify';
import start from '../';

describe('http server', () => {
  let fastify: Fastify.FastifyInstance;

  beforeEach(async () => {
    fastify = await start();
  });

  afterEach(() => {
    fastify.close();
  });

  test('GET /', () => {
    const expected = { hello: 'world' };

    fastify.inject(
      {
        method: 'GET',
        url: '/',
      },
      (err, response) => {
        expect(err).toBe(null);
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.payload)).toEqual(expected);
      },
    );
  });
});
