const Midias = require('../models/midias')


module.exports = app => {
    app.get('/midias', (req, res) => {
        Midias.lista(res)
    })

    app.get('/midias/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Midias.buscaPorId(id, res)
    })
    
    app.post('/midias', (req, res) => {
        const midia = req.body
        Midias.adiciona(midia,res)
    })

    app.patch('/midias/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Midias.altera(id, valores, res)
    })
    
    app.delete('/midias/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Midias.deleta(id, res)
    })

}

