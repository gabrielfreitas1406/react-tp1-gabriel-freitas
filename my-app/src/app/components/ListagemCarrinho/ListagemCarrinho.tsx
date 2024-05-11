
"use client";
import React from "react";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinnho";

interface IListagemCarrinho{
  itensCarrinho: ItemCarrinho[],
  removerItemDoCarrinho: Function,
  dispatch: React.Dispatch<CarrinhoAction>
}

export default function ListagemCarrinho({itensCarrinho, removerItemDoCarrinho, dispatch}: IListagemCarrinho) {

  return (
    <>

      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Valor Unitário</th>
                      <th>Quantidade</th>
                      <th>Valor Total</th>
                      <th>Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itensCarrinho.map((itemCarrinho)=>{
                      return(
                        <ItemCarrinho itemCarrinho={itemCarrinho} removerItemDoCarrinho={removerItemDoCarrinho} dispatch={dispatch}/>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
