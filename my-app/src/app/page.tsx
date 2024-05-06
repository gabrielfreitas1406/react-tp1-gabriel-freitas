"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ListagemProdutos from "./components/listagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { mockProdutos } from "./mocks/produto";
import React from "react";

interface adicionarAoCarrinhoProps{
  precoTotal: number,
  quantidadeItensTotal: number,
  adicionarAoCarrinho(): void
}

export default function Home() {
  const produtos = mockProdutos;

  const [precoTotal, setPrecoTotal] = React.useState<number>(0);
  const [quantidadeItensTotal, setQuantidadeTotalItens] = React.useState<number>(0);

  const adicionarAoCarrinho = (produto:Produto): void =>{
    setQuantidadeTotalItens(quantidadeItensTotal + 1);
    setPrecoTotal(precoTotal + Number(produto.preco));
  }
  return (
    
    <>
      <ResumoCarrinho quantidadeItensTotal={quantidadeItensTotal} precoTotal={precoTotal}/>
      <ListagemProdutos produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho}/**/ />
     </>
  );
}
