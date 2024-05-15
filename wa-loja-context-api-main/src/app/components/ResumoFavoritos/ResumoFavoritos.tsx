import CardProduto from "../CardProduto/CardProduto";
import { useContext } from "react";
import { FavoritosContext } from "@/app/state/FavoritosProvider";
import { useFavoritosProdutos } from "@/app/hooks/useFavoritosProdutos";

export default function ResumoFavoritos() {

  const favoritos = useFavoritosProdutos();

  return (
    <div className="mt-4">
      <h5 className="mb-4">Seus produtos favoritos:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {favoritos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </div>
  );
}
