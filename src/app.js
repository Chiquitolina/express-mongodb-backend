import express from 'express'
import routes from './routes/index';
import {engine} from 'express-handlebars'
import path from 'path'

// creamos el objeto express
const app = express()

// configuramos el motor de vista handlebars
app.engine('handlebars', engine({
    extname: '.handlebars'
    }));

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'handlebars')

app.use(routes)

export default app
