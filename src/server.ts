import express from 'express';

const app = express();

app.use(express.json());
// Rota: endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do sistema
// POST: Criar uma nova informação do back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: Parametros que vem na propria rota que identificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtro ou paginação
// Request Body: Parametros para criação e atualização de informação

// SELECT * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select('*')

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => {
    
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users; //se existir o search ele faz a busca

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
})
app.listen(3333);