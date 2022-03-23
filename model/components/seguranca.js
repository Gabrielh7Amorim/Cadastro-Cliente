//npm install sha1 --- Api
function ocultarSenha(senha){
    var sha1 = require('sha1');
    console.log(senha);
    var hash = sha1(senha); //chamada de função da biblioteca sha1
    console.log(hash); //exibe o que foi gerado da função sha1
    return hash;
}

//sha1 é o mais indicado para fazer criptografias
//hash - tudo o que for alterado será feito uma tradução

module.exports = {ocultarSenha}