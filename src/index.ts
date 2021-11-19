import fastify, { FastifyInstance } from 'fastify';

const { PORT = '3000' } = process.env;

export function build(options = {}): FastifyInstance {
  const app = fastify(options);

  app.get('/', async () => {
    return { hello: 'world' };
  });

  return app;
}

const server = build({
  logger: {
    leve: 'info',
    prettyPrint: true,
  },
});

server.listen(parseInt(PORT), '0.0.0.0', (err, address) => {
  if (err) {
    throw err;
  }

  server.log.info(`Server listening on ${address}`);
});
