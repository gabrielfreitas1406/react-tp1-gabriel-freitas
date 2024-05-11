interface ItemCarrinho{
    id: string,
    nome: string,
    preco: number,
    quantidade: number
}

type StateCarrinho = ItemCarrinho[];
type CarrinhoAction = {type: "aumentar_qtd", id: string} |
                      {type: "reduzir_qtd",  id: string} | 
                      {type: "remover",  id: string};