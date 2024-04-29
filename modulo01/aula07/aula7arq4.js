// Escopos

//Global - permite que a variavel seja acessada em qualquer parte do codigo
let variavelGlobal;
let x = 5;
let y = -2;
//Função - apenas dentro da função.
function variavelF (var1, var2){
    let variavelFuncao = var1 + var2 //Função
    return variavelFuncao;
}
variavelGlobal = variavelF(x,y); //Global
//Bloco - variaveis dentro de blocos como if, for, while...
if (variavelGlobal > 0){
    let maior = true //Bloco
    if (maior){
        console.log('OK')
    }
}
