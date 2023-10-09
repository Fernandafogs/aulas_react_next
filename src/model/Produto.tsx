export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
}

export default function Produto () {
    return (
        <h1>Produto</h1>
    )
}