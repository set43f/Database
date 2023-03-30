const express = require('express')
const route = express.Router()

const controller = require('../controller/controller')
const services = require('../services/render ')

route.get('/', services.homeRoutes)
route.get('/add-user', services.homeuser)
route.get('/update', services.homeUpdate)


    //api
route.post('/controller', controller.create)
route.get('/controller', controller.find)
route.put('/controller/:id', controller.update)
route.delete('/controller/:id', controller.delete)

module.exports = route

