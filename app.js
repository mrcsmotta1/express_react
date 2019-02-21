import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())

mongoose.connect('mongodb://admin:admin123@localhost:27017/admin',{useNewUrlParser: true})


require ('./src/index')(app)

//const app = require('http').createServer((req, res) => res.send('Ahoy!'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is listening on port '+PORT);
});