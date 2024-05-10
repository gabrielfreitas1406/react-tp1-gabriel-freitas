import api from "./api";

export default async function getDetalhesProduto(nomeProduto: string) : Promise<Produto>{
    return api.get(`/produto/${nomeProduto}`).then((response)=> response.data);
}
