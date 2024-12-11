const produto = [
    {
        id: 1,
        nome: "televisao",
        qtd: 24,
        preco: 2459.87
    },

    {
        id: 2,
        nome: "fone de ouvido",
        qtd: 56,
        preco: 347.72
    },


];

function i(){
    produto.push(produto);
}

function listaProduto(id){
    return produto.find(p => p.id == id);
}
function retornarProduto(){
    return produto;
}

function inserirProduto(produto){
    produto.push(produto);
}

function alteraProduto(id,dadosproduto){
    const prodnovo =  produto.find(p => p.id == id);
   if (prodnovo){
    prodnovo.nome =  dadosproduto.nome;
    prodnovo.qtd = dadosproduto.qtd;
    prodnovo.preco = dadosproduto.preco;
   } else {
        return("Deu ruim!");
   }    
}

function removeProduto(id){
    const indice = produto.findIndex(p => p.id == id);
    produto.splice(indice,1);
}

module.exports={
    listaProduto,
    retornarProduto,
    inserirProduto,
    alteraProduto,
    removeProduto


}