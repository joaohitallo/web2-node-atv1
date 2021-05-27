const conexao = require('../infraestrutura/conexao')

class Midias {
    adiciona(midia, res){
        const nomeEHValido = midia.nome.length >= 5

        const validacoes = [
            {
                nome: 'nome',
                valido: nomeEHValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            },
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {
            const sql = 'INSERT INTO Midias SET ?'
    
            conexao.query(sql, midia,(erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(resultados)
                }
            })
        }


    }

    lista(res){
        const sql = 'SELECT * FROM Midias'
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(400).json(resultados)
            }
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Midias WHERE id=${id}`
        conexao.query(sql,(erro, resultados) => {
            const atendimento = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(400).json(atendimento)
            }
        })
    }

    altera(id, valores, res){
        const sql = 'UPDATE Midias SET ? WHERE id=?'

        conexao.query(sql,[valores, id],(erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(400).json({...valores, id})
            }
        })
    }

    deleta(id, res){
        const sql = 'DELETE FROM Midias WHERE id=?'
        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Midias