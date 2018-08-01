const express = require('express');
const http = require('http')
const path = require('path');
const app = express();;
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./config/dbconfig');
const Empresasrouter = require('./routes/empresasRt');
const Trabajadoresrouter = require('./routes/trabajadoresRt');
const Utilsrouter = require('./routes/utilsRt');
const pg = require('pg');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//Configuraciones
app.use(morgan('dev')); // log de las peticiones
app.use(cookieParser()); // lector de cookies
app.use(cors());
const port = process.env.PORT || 3000;
app.set('port', port);

app.use(express.static(path.join(__dirname, 'dist/kalimet')));

//routes
app.use(Empresasrouter);
app.use(Utilsrouter);
app.use(Trabajadoresrouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/kalimet/index.html'));
});


//creacion de servidor
const server = http.createServer(app);
server.listen(port, () => console.log('running'));

//npm install --no-progress
/**INSTALLED_APPS = (
    ...
    'corsheaders',
    ...
)

MIDDLEWARE_CLASSES = (
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
)

CORS_ORIGIN_ALLOW_ALL = True   */
