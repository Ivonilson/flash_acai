const mysql = require('mysql2/promise')
async function connect () 
{
    try {

        if(global.connection && global.connection.state !== 'disconnected')
            {
                return global.connection
        
            } else {
                const connection = await mysql.createConnection({
                    host: 'localhost',
                    port: 3306,
                    user: 'root',
                    password: '',
                    database: 'db_flashacai'
                })
        
                console.log('Conectou ao banco de dados...')
                global.connection = connection
                return global.connection
            }
        
    } catch (error) {
        console.log('Erro: ' + error)
    }
   
}

connect()

async function selectProdutos()
{
    try {

        const conn = await connect()
        const [rows] = await conn.query('SELECT * FROM tbl_produto;')
        return rows

    } catch (error) {
        console.log('Erro: ' + error)
    }

}   

async function insertProdutos(produto)
{
    const conn = await connect()
    const sql = "INSERT INTO tbl_produto (id_prod, tipo, descricao, unidade_medida, preco_unitario, quantidade_estoque) VALUES " +
    "(?, ?, ?, ?, ?, ?);"
    return await conn.query(sql, [produto.codigo, produto.tipo, produto.descricao, produto.unidade, produto.preco_unitario, produto.estoque])
}

module.exports = {selectProdutos, insertProdutos}