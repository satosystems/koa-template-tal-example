import Koa from 'koa';

const app = new Koa();

app.use(async (ctx: Koa.Context) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
console.info('Server running on port 3000');