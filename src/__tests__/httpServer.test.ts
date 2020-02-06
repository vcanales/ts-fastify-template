import Fastify from 'fastify';
import httpServer from '../httpServer';

describe('http server', () => {
  let fastify: Fastify.FastifyInstance;

  beforeEach(() => {
    fastify = httpServer();
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
