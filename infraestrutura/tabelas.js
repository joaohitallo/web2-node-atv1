class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarMidias()
    }

    criarMidias(){
        const sql = 'CREATE TABLE IF NOT EXISTS Midias'
                    + '(id int NOT NULL AUTO_INCREMENT,'
                    + 'Nome varchar(50) NOT NULL,'
                    + 'tipoMidia varchar(20) NOT NULL,'
                    + 'categoria varchar(20) NOT NULL,'
                    + 'sinopse text,'
                    + 'PRIMARY KEY(id))' ;
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela de midias criada com sucesso')
            }
        })
    }
}



module.exports = new Tabelas