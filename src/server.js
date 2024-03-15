const port = 3003 

const express = require('express')
const app = express()
const database = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})) // Parser url body params to javascript object

app.get('/products', (req, res, next) => {
    res.send(database.getProducts()) // Parser to JSON (Serialize)
})

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // Parser to JSON (Serialize)
})

app.put('/products/:id', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price, 
        id: req.params.id,
    })
    res.send(product) // Parser to JSON (Serialize)
})


app.delete('/products/:id', (req, res, next) => {
    const product = database.deleteProduct(req.params.id)
    res.send(product) // Parser to JSON (Serialize)
})


app.listen(port, () => {
    console.log(`Server is running at ${port} port.`)
})
