import Image from "next/image"
import { useRouter } from "next/navigation"

interface CardProdutoProps {
  produto: Produto,
  adicionarAoCarrinho: Function
}

export default function CardProduto({produto, adicionarAoCarrinho}: CardProdutoProps){
  const router = useRouter();

  function clickAdicionarAoCarrinho(){
    adicionarAoCarrinho(produto);
  }
  const nomeProduto = produto.nome;
  function verDetalhesProduto(nomeProduto: string){
    router.push(`../produto/${nomeProduto}`);
  }
    return (
              <div className="card shadow-sm h-100">
                <Image
                  src={String(produto.fotos[0].src)}
                  className="card-img-top"
                  alt="imagem placeholder"
                  width={300}
                  height={320}
                />

                <div className="card-body bg-light">
                  <h5 className="card-title">{produto.nome}</h5>
                  <p className="card-text text-secondary">{produto.preco}</p>
                  <button className="btn btn-dark d-block w-100" type="button" onClick={()=>clickAdicionarAoCarrinho()}>
                    Adicionar no carrinho
                  </button>
                  <button className="btn btn-light d-block w-100 mt-2" type="button" onClick={()=>verDetalhesProduto(nomeProduto)}>
                    Ver detalhes
                  </button>
                </div>
              </div>
    )
}