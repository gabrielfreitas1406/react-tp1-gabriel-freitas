import CardProduto from "../CardProduto/CardProduto"

interface IListagemProdutos{
    produtos: Produto[] | null,
    adicionarAoCarrinho: Function
}

export default function ListagemProdutos ({produtos, adicionarAoCarrinho}:IListagemProdutos){
    return (
        <>
            <h5 className="mb-3">Produtos disponíveis:</h5>
            {
                produtos? (
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
                ): <h5>Carregando....</h5>
            }
            
        </>
    )
}