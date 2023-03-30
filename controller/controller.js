let Userdb = require('../model/model')

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400),send({messange: 'Поля не могут быть пустые'})
        return;
    }

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    user
    .save(user)
    .then(data => {
        //res.send(data)
        res.redirect('/add-user')
    })
    .catch(err => {
        res.status(500).send({
            messange: err.messange
        })
    })
}

exports.find = (req, res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({
            messange: err.messange
        })
    })
}

exports.update = (req, res) => {
    if(!req.body) {
        return res
        .status(400)
        .send({messange: 'Поле не может быть пустое'})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {userFindAndModify: false})
    .then(data => {
        if(!data) {
        res.status(404).send({messange: 'Не получается обновить данные'})
    } else {
        res.send(data)
    }
})
.catch(err => {
    res.status(500).send({
        messange: err.messange
    })
})
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data) {
            res.status(404).send({messange: 'Не получается удалить'})
        } else {
            res.send({
                messange: 'Пользователь успешно удалены'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            messange: err.messange
        })
    })
}