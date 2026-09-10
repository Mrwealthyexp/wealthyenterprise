import http from 'node:http';

const server = http.createServer((_, response) => {
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ ok: true, service: 'wealthyexpress-api' }));
});

const port = Number(process.env.PORT || 4000);
server.listen(port, () => {
  console.log(`API listening on ${port}`);
});
