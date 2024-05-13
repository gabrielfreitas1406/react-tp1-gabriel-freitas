"use client"
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import React, { act } from "react";
import { useReducer } from "react";

function reducer(state: StateCarrinho, action: CarrinhoAction) {
    switch(action.type){
        case("aumentar_qtd"):
            return (state.map((itemCarrinho)=>{
                if (itemCarrinho.id === action.id) return {...itemCarrinho, quantidade: itemCarrinho.quantidade+1}
                return (itemCarrinho);
            }));
        case("reduzir_qtd"):
            return (state.map((itemCarrinho)=>{
                if (itemCarrinho.id === action.id && itemCarrinho.quantidade > 0) return {...itemCarrinho, quantidade: itemCarrinho.quantidade-1}
                return (itemCarrinho);
            }));
        case("remover"):
            return  state.filter((itemCarrinho) => itemCarrinho.id !== action.id);
        default:
            throw new Error();
    }
}

export default function Carrinho(){

    //const [itensCarrinho, setCarrinho] = React.useState(mockItensCarrinho);

    /* ======================= Trabalho 1 de Gerenciamento de Estados: useReducer: Vamos praticar? =======================*/
    
    const [itensCarrinho, dispatch] = useReducer(reducer, mockItensCarrinho);

    
    function calcularTotal(): number {
        return itensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
    }

    const removerItemDoCarrinho = (id: string) => {
        dispatch({ type: "remover", id });
    };

     return(
        <>
        <main>
            <div className="container p-5">
                <ListagemCarrinho itensCarrinho={itensCarrinho} removerItemDoCarrinho={removerItemDoCarrinho} dispatch={dispatch}/>
                <ResumoCarrinho quantidadeItensTotal={itensCarrinho.length} precoTotal={calcularTotal()}/>
            </div>
        </main>
            
        </>
     )
}