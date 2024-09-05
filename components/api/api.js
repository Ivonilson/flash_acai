function login() {
    const login = 'https://abgsolucoes.tec.br/api/login.php'
    return login
}

function produtos(){
    const produtos = 'https://abgsolucoes.tec.br/api/produtos.php'
    return produtos
}

function cadVenda() {
    const venda = 'https://abgsolucoes.tec.br/api/venda.php'
    return venda
}

module.exports = {login, produtos, cadVenda}