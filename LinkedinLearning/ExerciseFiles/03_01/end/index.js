import express from 'express';
import data from './data/mock.json' assert { type: 'json' };


const app = express();
const PORT = 3000;

//Using the public folder at the root (/) of the project
app.use(express.static('public'));

//Using the images folder at the route /images
app.use('/images', express.static('images'));

//GET
app.get('/', (request, response) => {
    response.json(data);
})

//GET with Routing Parameters
app.get('/class/:id', (request, response)=> {
    const studentId = Number(request.params.id);
    
    const student = data.filter((student) => student.id === studentId);
    response.send(student)
    console.log(data);
})

//POST
app.post('/create', (request, response) => {
    response.send('This is a POST request at /create')
})

//PUT
app.put('/edit', (request, response) => {
    response.send('This is a PUT request at /edit')
})

//DELETE
app.delete('/delete', (request, response) => {
    response.send('This is a DELETE request at /delete')
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
});