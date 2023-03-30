const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodypaser = require('body-parser')
const connectDB = require('./database/connection')


const app = express();
const path = require('path')

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'))

connectDB()

app.use(bodypaser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views/ejs"))

app.use('/css', express.static(__dirname + '/assets/css'));

app.use('/css', express.static(path.resolve(__dirname, "/assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "/assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"/assets/js")));

app.use('/', require('./Routes/router'))


app.listen(PORT, () =>{
    console.log('сервер запущен на ' + PORT + 'порты')
})

