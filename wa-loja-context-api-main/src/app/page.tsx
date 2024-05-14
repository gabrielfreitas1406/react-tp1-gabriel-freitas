"use client";

import React, { createContext, useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import FavoritosProvider from "./state/FavoritosProvider";


export default function App() {
  const produtos = mockProdutos;
  

  return (
    <FavoritosProvider>
    <main>
      <div className="container p-5">
        <ListagemProdutos
          produtos={produtos}
        />
      </div>
    </main>
    </FavoritosProvider>
  );
}