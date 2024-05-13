"use client";

import React, { createContext, useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";

export const Favoritos_contexto = createContext({
  favoritos: [] as Produto[],
  setFavoritos:  {} as React.Dispatch<React.SetStateAction<Produto[]>>
});

export default function App() {
  const produtos = mockProdutos;
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <Favoritos_contexto.Provider value={{favoritos, setFavoritos}}>
    <main>
      <div className="container p-5">
        <ListagemProdutos
          produtos={produtos}
        />
      </div>
    </main>
    </Favoritos_contexto.Provider>
  );
}