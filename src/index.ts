import Fastify from 'fastify';

const { PORT = '3000' } = process.env;
const fastify = Fastify({ logger: true });

export default async function start(): Promise<Fastify.FastifyInstance> {
  fastify.get('/', async () => {
    return { hello: 'world' };
  });

  await fastify.listen(parseInt(PORT), '0.0.0.0', (err, address) => {
    if (err) {
      throw err;
    }

    fastify.log.info(`Server listening on ${address}`);
  });

  return fastify;
}

start();