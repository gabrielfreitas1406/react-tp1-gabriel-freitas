import { useContext } from "react"
import { FavoritosContext } from "../state/FavoritosProvider"

export const useFavoritosProdutos = () =>{
    const {favoritos} = useContext(FavoritosContext);
    return favoritos;
}