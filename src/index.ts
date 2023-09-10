import Koa from 'koa';
import fs from 'fs';
// @ts-ignore
import tal from 'template-tal';

const app = new Koa();

app.use(async (ctx: Koa.Context) => {
  const html = fs.readFileSync('./src/index.html', 'utf8');
  const data = {
    foo: "FOO",
    bar: () => "BAR",
    getBasket: () => ['apple', 'orange', 'banana']
  };
  tal.process(html, data, (error: string, result: string) => {
    if (error != null) {
      console.error(error);
    } else {
      ctx.body = result;
    }
  });
});

app.listen(3000);
console.info('Server running on port 3000');
