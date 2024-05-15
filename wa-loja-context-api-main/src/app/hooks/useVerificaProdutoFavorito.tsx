import { useContext } from "react"
import { FavoritosContext } from "../state/FavoritosProvider"

export const useVerificaProdutoFavorito = (id: string) =>{

    const {favoritos} = useContext(FavoritosContext);

    const ehFavorito = favoritos.some((item) => item.id === id);

    return ehFavorito;
}