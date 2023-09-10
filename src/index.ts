import Koa from 'koa';
import fs from 'fs';
import tal  from 'template-tal';

const app = new Koa();

app.use(async (ctx: Koa.Context) => {
  const html = fs.readFileSync('./src/index.html', 'utf8');
  const data = {
    foo: "FOO",
    bar: () => "BAR",
    baz: () => new Promise(resolve => setTimeout(() => resolve('BAZ'), 5000)),
    getBasket: () => ['apple', 'orange', 'banana']
  };
  tal.process(html, data).then((result: string) => {
    ctx.body = result;
  });
});

app.listen(3000);
console.info('Server running on port 3000');
