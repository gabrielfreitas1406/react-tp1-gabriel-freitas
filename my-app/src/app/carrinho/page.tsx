"use client"
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import React from "react";

export default function Carrinho(){

    const [itensCarrinho, setCarrinho] = React.useState(mockItensCarrinho);

    //const [precoTotal, setPrecoTotal] = React.useState<number>(0);
    //const [quantidadeItensTotal, setQuantidadeTotalItens] = React.useState<number>(0);
  
    const removerItemDoCarrinho = (id: string) => {
        setCarrinho(prevItensCarrinho => prevItensCarrinho.filter(item => item.id !== id));
    };

    function calcularTotal(): number {
        let total = 0;
        for (const item of itensCarrinho) {
            total += item.preco * item.quantidade;
        }
        return total;
    }
    
     return(
        <>
            <ListagemCarrinho itensCarrinho={itensCarrinho} removerItemDoCarrinho={removerItemDoCarrinho}/>
            <ResumoCarrinho quantidadeItensTotal={itensCarrinho.length} precoTotal={calcularTotal()}/>
        </>
     )
}