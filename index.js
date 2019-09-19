const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :postcontent'))
morgan.token('postcontent', (req, res) => { return JSON.stringify(req.body) })


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

app.get('/info', (request, response)=>{
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        <p>${Date()}</p>`
    )
})
  
  app.get('/api/persons', (req, res, next) => {
    res.json(persons)
  })
  
  app.get('/api/persons/:id', (request, response, next) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person){
        response.json(person)
    } else {
    response.status(404).end()
    }
  })
  app.delete('/api/persons/:id', (req, res, next)=>{
      const id = Number(req.params.id)
      persons = persons.filter(person => person.id !==id)
      res.status(204).end()
  })
  const generateId = () =>{
      const maxId = persons.length >0
      ? Math.max(...persons.map(p => p.id))
      : 0
    return maxId+1
  }

  app.post('/api/persons', (request, response, next)=>{
      const body = request.body
      if(!body.name){
          return response.status(400).json({
              error: 'name missing!'
          })
      }
      if(!body.number){
          return response.status(400).json({
              error: 'number missing!'
          })
      }
      if(persons.findIndex(person => person.name === body.name)>-1){
          return response.status(400).json({
              error: 'name must be unique!'
          })
      }
      
      const person = {
          name: body.name,
          number: body.number,
          id: generateId(),
      }

      persons = persons.concat(person)
      
      response.json(person)
  })
    
 


  
let persons = [
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3
    },
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
      id: 4
    },
    {
      name: "123",
      number: "123",
      id: 5
    },
    {
      name: "44123",
      number: "414123",
      id: 6
    },
    {
      name: "12312313",
      number: "asfaölsfj",
      id: 7
    },
    {
      name: "åapsofjapåsof",
      number: "123123",
      id: 8
    },
    {
      name: "i+0i",
      number: "986986",
      id: 9
    }
  ]

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })