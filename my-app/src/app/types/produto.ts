interface Foto{
    titulo: String;
    src: String;
}

interface Produto{
    id: String,
    fotos: Foto[],
    nome: String,
    preco: String,
    descricao: String,
    vendido: String,
    usuario_id: String
}