"use client"

import { useEffect, useState } from "react";
import ListagemProdutos from "./components/listagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { mockProdutos } from "./mocks/produto";
import React from "react";
import api from "./services/api";

interface adicionarAoCarrinhoProps{
  precoTotal: number,
  quantidadeItensTotal: number,
  adicionarAoCarrinho(): void
}

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]|null>(null);

  useEffect(()=>{
    /*=========== UTILIZANDO O FETCH DE ACORDO COM A PARTE DO TRABALHO 2: Hooks do Next e rotas dinâmicas: Vamos praticar? ===========*/
    /*const fetchData = async () =>{
      try{
        const response  = await fetch(
          "https://ranekapi.origamid.dev/json/api/produto"
        );
        const json = await response.json();
        setProdutos(json);
      } catch(Error){
        console.log("Não é para imprimir aqui, mas para criar uma interface!!!");
        setProdutos(null);
      }
    }
    fetchData();*/
    
    /*=========== UTILIZANDO CONFORME A  React Query e Axios: Vamos praticar? ===========*/
    api.get("/produto").then((response)=>{
      setProdutos(response.data);
    });
    
  }, []);

  const [precoTotal, setPrecoTotal] = useState<number>(0);
  const [quantidadeItensTotal, setQuantidadeTotalItens] = useState<number>(0);
  
  const adicionarAoCarrinho = (produto:Produto): void =>{
    setQuantidadeTotalItens(quantidadeItensTotal + 1);
    setPrecoTotal(precoTotal + Number(produto.preco));
  }
  return (
    
    <>
      <ResumoCarrinho quantidadeItensTotal={quantidadeItensTotal} precoTotal={precoTotal}/>
      <ListagemProdutos produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho}/>
     </>
  );
}
