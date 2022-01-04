function bodyParser(request, callback) {
  let body = '';

  // sempre que chega uma pequena parte do body, é concatenado dentro da let body
  // uma pequena parte 'data'
  request.on('data', (chunk) => {
    body += chunk;
  });

  // após recebido o aviso 'end', de fim da chegada da informação, é feito o parse
  // transformando a string em objeto JSON
  request.on('end', () => {
    body = JSON.parse(body);
    // injetando no request.body o body, é chamado a função callback handle, lá no
    // index, que chama o método dentro das routes
    request.body = body;
    callback();
  });
}

module.exports = bodyParser;
