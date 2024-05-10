"use client";

import useDetalhesProduto from "@/app/hooks/useDetalhesProduto";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

interface ProdutoPropriedades{
     produtoProp: Produto;
}

export default function ClientSideProduto({produtoProp}: ProdutoPropriedades){
    const params = useParams();
    const nomeProduto = params.produto as string;


    /*================== FEITO NA PARTE: Hooks do Next e rotas dinâmicas: Vamos praticar? ==================*/
    /*
    const [estado_produto, setProduto] = React.useState<Produto>();
    useEffect(
         ()=>{
            const fetchProduto = async () =>{
                try{
                    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`);
                    const json = await response.json();
                    setProduto(json);
                }
                catch(Error){
                    console.log(`Erro ao tentar pegar parâmetro ${Error}`);
                }
            }
            fetchProduto();
        }
    )
    return estado_produto ? (
        <main>
          <div className="container p-5">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>
      
                <h5 className="card-title mb-4 fw-bold">Nome produto</h5>
      
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                  <Image key={estado_produto?.id} src={estado_produto?.fotos[0].src} alt={estado_produto?.fotos[0].titulo} width={300} height={320} />
                </div>
      
                <p className="card-text fw-medium">
                  Valor: R${Number(2000).toFixed(2)}
                </p>
                <p className="card-text fw-medium">Descrição: {estado_produto?.descricao}</p>
                <p className="card-text fw-medium">Anunciado por: {estado_produto?.usuario_id}</p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <h5 className="card-title mb-4 fw-bold">Carregando...</h5>
      );
    
    */
    /*================== FEITO NA PARTE: React Query e Axios: Vamos praticar? ==================*/
    const { produto, isPending, isError} = useDetalhesProduto(nomeProduto);
    
    if (isPending) return <h5>Carregando...</h5>;

    if (isError) return <h5>Ocorreu erro ao carregar os produtos {isError}</h5>

    if (!produto) return <h5>Não há produtos disponíveis no momento</h5>
    
    return(
      <>
      <main>
          <div className="container p-5">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>
      
                <h5 className="card-title mb-4 fw-bold">Nome produto</h5>
      
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                  <Image key={produto.id} src={produto.fotos[0].src} alt={produto.fotos[0].titulo} width={300} height={320} />
                </div>
      
                <p className="card-text fw-medium">
                  Valor: R${Number(2000).toFixed(2)}
                </p>
                <p className="card-text fw-medium">Descrição: {produto.descricao}</p>
                <p className="card-text fw-medium">Anunciado por: {produto.usuario_id}</p>
              </div>
            </div>
          </div>
        </main>     
      </>
    );
}