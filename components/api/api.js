function login() {
    const login = 'https://abgsolucoes.tec.br/api/login.php'
    return login
}

function produtos(){
    const produtos = 'https://abgsolucoes.tec.br/api/produtos.php'
    return produtos
}

function ultimasVendas(){
    const vendas = 'https://abgsolucoes.tec.br/api/ultimasVendas.php'
    return vendas
}

function cadVenda() {
    const venda = 'https://abgsolucoes.tec.br/api/venda.php'
    return venda
}

function precoProdutoId(id_prod) {
    const precoProduto = `https://abgsolucoes.tec.br/api/preco_produto_id.php?id_prod=${id_prod}`
    return precoProduto
}

module.exports = { login, produtos, ultimasVendas, cadVenda, precoProdutoId }