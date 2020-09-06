import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { name: 'Carol', age: 29},
        { name: 'Mateus', age: 28},
    ];
    
    return response.json(users);
});

app.listen(3333);

