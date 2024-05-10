import {useQuery} from "@tanstack/react-query";
import getDetalhesProduto from "../services/produto";

export default function useDetalhesProduto(nomeProduto :string){
    const {data, isPending, isError} = useQuery({
        queryKey: ["detalhes_produtos"],
        queryFn: () => getDetalhesProduto(nomeProduto),
    });

    return {produto: data, isPending, isError};
}