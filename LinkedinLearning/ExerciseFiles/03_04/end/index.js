import express from 'express';
import data from './data/mock.json';

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

//GET - download method
app.get('/download', (request, response) => {
    response.download('images/mountains_2.jpeg')
})

//GET - redirect method
app.get('/redirect', (request, response) => {
    response.redirect('http://www.linkedin.com')
})

//Route chaining
app.route('/class')
.get((request, response) => {
    response.send('Retrieve class info')
}).post((request, response) => {
    response.send('Create class info')
}).put((request, response) => {
    response.send('Update class info')
})

//GET
// app.get('/class', (request, response) => {
//     response.send('Retrieve class info')
// });

//POST
// app.post('/class', (request, response) => {
//     response.send('Create class info')
// });

//PUT
// app.put('/class', (request, response) => {
//     response.send('Update class info')
// })

//GET with next()
app.get('/next', (request, response, next) => {
   console.log("The response will be sent by the next function.")

   next()
}, (request, response) =>{
    response.send('I just set up a route with a second callback.')
})

//GET with Routing Parameters
app.get('/class/:id', (request, response)=> {
    const studentId = Number(request.params.id);
    
    const student = data.filter((student) => student.id === studentId);
    response.send(student)
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