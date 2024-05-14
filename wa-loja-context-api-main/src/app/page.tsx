"use client";

import React, { useContext, useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { FavoritosContext } from "./state/FavoritosProvider";


export default function App() {
  const produtos = mockProdutos;
  
  const {favoritos, setFavoritos} = useContext(FavoritosContext);

  return (
    <main>
      <div className="container p-5">
        <ListagemProdutos
          produtos={produtos}
        />
      </div>
    </main>
  );
}