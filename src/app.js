import express from 'express'
import routes from './routes/index';
import {engine} from 'express-handlebars'
import path from 'path'
import morgan from 'morgan';

// creamos el objeto express
const app = express()

// configuramos el motor de vista handlebars
app.engine('handlebars', engine({
    extname: '.handlebars'
    }));

//settings
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'handlebars')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//rutas
app.use(routes)

export default app
