interface ItemCarrinhoProps{
    itemCarrinho: ItemCarrinho,
    removerItemDoCarrinho: Function,
    dispatch: React.Dispatch<CarrinhoAction>
}

export default function ItemCarrinho({itemCarrinho, removerItemDoCarrinho, dispatch}: ItemCarrinhoProps){
    const valorTotalProduto = (
        precoUnitario: number,
        quantidade: number
      ): number => precoUnitario * quantidade;
    
    const clickRemoverDoCarrinho = (id: String): void => {
        removerItemDoCarrinho(id);
    }
    return (
    <>
        <tr key={String(itemCarrinho.id)}>
                <td>{itemCarrinho.nome}</td>
                <td>R$ {itemCarrinho.preco.toFixed(2)}</td>
                <td>
                <button className="btn btn-secondary btn-sm me-2" onClick={()=>dispatch({type: "reduzir_qtd", id: itemCarrinho.id})}>-</button>
                {String(itemCarrinho.quantidade)}
                <button className="btn btn-secondary btn-sm ms-2" onClick={()=>dispatch({type: "aumentar_qtd", id: itemCarrinho.id})}>+</button>
                </td>
                
                <td>R$ {valorTotalProduto(itemCarrinho.preco, itemCarrinho.quantidade).toFixed(2)}</td>
                <td>
                <button className="btn btn-danger btn-sm" onClick={()=>dispatch({type: "remover", id: itemCarrinho.id})}>
                    Remover
                </button>
            </td>
        </tr>
    </>
    )
}