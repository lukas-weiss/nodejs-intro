import express from 'express';

let app = express();
const port = 1337;

app.get('/', (request, response) => {
    const data = {
        name: 'lunch break',
        text: 'This is an example'
    }
    response.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});