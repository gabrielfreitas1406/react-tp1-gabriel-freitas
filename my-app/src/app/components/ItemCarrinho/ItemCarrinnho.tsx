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
                <td>{String(itemCarrinho.quantidade)}</td>
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