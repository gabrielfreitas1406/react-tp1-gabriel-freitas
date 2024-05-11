interface ItemCarrinhoProps{
    itemCarrinho: ItemCarrinho,
    removerItemDoCarrinho: Function
}

export default function ItemCarrinho({itemCarrinho, removerItemDoCarrinho}: ItemCarrinhoProps){
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
                <button className="btn btn-secondary btn-sm me-2">-</button>
                {String(itemCarrinho.quantidade)}
                <button className="btn btn-secondary btn-sm ms-2">+</button>
                </td>
                
                <td>R$ {valorTotalProduto(itemCarrinho.preco, itemCarrinho.quantidade).toFixed(2)}</td>
                <td>
                <button className="btn btn-danger btn-sm" onClick={()=>clickRemoverDoCarrinho(itemCarrinho.id)}>
                    Remover
                </button>
            </td>
        </tr>
    </>
    )
}