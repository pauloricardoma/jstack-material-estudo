const http = require('http');
const { URL } = require('url');

const bodyParser = require('./helpers/bodyParser');
const routes = require('./routes');

const server = http.createServer((request, response) => {
  // .parse retorna um objeto com as especificações da url request
  // com true recebemos um object string para params
  // .parse foi deprecathed, refazendo com novo módulo
  // aqui usada para extrair os query params da requisição
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  // searchParams é um iterable, não um objJS, então é preciso converter para usar
  // console.log(Object.fromEntries(parsedUrl.searchParams));

  // .pathname, parametro '/users' em parsedURl, recebido de url
  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  let { pathname } = parsedUrl;
  let id = null;

  // const splitEndPoint = pathname.split('/').filter((routeItem) => Boolean(routeItem));
  // posso informar aqui Boolean direto
  const splitEndPoint = pathname.split('/').filter(Boolean);

  // salva o id que está chegando na rota
  if (splitEndPoint.length > 1) {
    pathname = `/${splitEndPoint[0]}/:id`;
    id = splitEndPoint[1];
  };

  // itera e já retorna o primeiro do array que bate com a requisição
  // buscando algum endpoint registrado
  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(body));
    }

    // .includes verifica se um informação passada está dentro do array
    if (['POST', 'PUT', 'PUT'].includes(request.method)) {
      // bodyParser para pegar a string do body e transformar em JSON
      bodyParser(request, () => route.handler(request, response));
    } else {
    route.handler(request, response);
    }
  } else {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end(`Cannot ${request.method} ${pathname}`);
  }
});

// escutando na porta 3000
server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
