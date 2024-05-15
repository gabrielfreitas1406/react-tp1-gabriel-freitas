import Image from "next/image";
import { useContext } from "react";
import { FavoritosContext } from "@/app/state/FavoritosProvider";
import { useVerificaProdutoFavorito } from "@/app/hooks/useVerificaProdutoFavorito";
import { useFavoritosContext } from "@/app/hooks/useFavoritosContext";

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({
  produto
}: CardProdutoProps) {

  const  { favoritos, setFavoritos } = useFavoritosContext();


  const adicionarAosFavoritos = (produto: Produto) => {
    setFavoritos((favoritos) => [...favoritos, produto]);
  };


  //const ehFavorito = favoritos.some((item) => item.id === produto.id);

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          className="card-img-top"
          alt="imagem placeholder"
          width={300}
          height={320}
        />

        <div className="card-body bg-light">
          <h5 className="card-title">{produto.nome}</h5>
          <p className="card-text text-secondary">R$ {produto.preco}</p>
          <button
            className="btn btn-success d-block w-100 "
            type="button"
            onClick={() => adicionarAosFavoritos(produto)}
            disabled={useVerificaProdutoFavorito(produto.id)}
          >
            {useVerificaProdutoFavorito(produto.id) ? "Adicionado" : "Adicionar aos favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
}
