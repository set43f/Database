
const axios = require('axios')

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/controller/')
    .then(function(response) {
        res.render('index', {users: response.data})
    })
    .catch(err => {
        res.send(err)
    })
}
exports.homeuser = (req, res) => {
    res.render('add_user')
}

exports.homeUpdate = (req, res) => {
    res.render('update')
}

