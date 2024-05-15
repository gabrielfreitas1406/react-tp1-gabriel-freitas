"use client";

import React, { useContext, useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { FavoritosContext } from "./state/FavoritosProvider";
import { useFavoritosContext } from "./hooks/useFavoritosContext";


export default function App() {
  const produtos = mockProdutos;
  
  const {favoritos, setFavoritos} = useFavoritosContext();

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