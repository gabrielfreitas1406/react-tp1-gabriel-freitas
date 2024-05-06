import CardProduto from "../CardProduto/CardProduto"

interface IListagemProdutos{
    produtos: Produto[],
    adicionarAoCarrinho: Function
}

export default function ListagemProdutos ({produtos, adicionarAoCarrinho}:IListagemProdutos){
    return (
        <>
            <h5 className="mb-3">Produtos disponíveis:</h5>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {produtos.map((produto)=>{
                        return(
                            <div className="col" key={String(produto.id)}>
                                <CardProduto produto={produto} adicionarAoCarrinho={adicionarAoCarrinho}/>
                            </div>
                        )
                     }) 
                    }
            </div>
        </>
    )
}