'use client'

import React, {createContext, useState} from "react";

interface FavoritosProviderProps {
    children: React.ReactNode;
}

export const FavoritosContext = createContext({
    favoritos: [] as Produto[],
    setFavoritos:  {} as React.Dispatch<React.SetStateAction<Produto[]>>
  });

  const FavoritosProvider = ({children}: FavoritosProviderProps) =>{
    const [favoritos, setFavoritos] = useState<Produto[]>([]);

    const values = {
        favoritos,
        setFavoritos,
    };

    return(
        <FavoritosContext.Provider value={values}>{children}</FavoritosContext.Provider>
    )
  }

  export default FavoritosProvider;