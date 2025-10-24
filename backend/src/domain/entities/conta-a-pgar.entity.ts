export class ContaApagar{
    public readonly docCod: number;
    public readonly pesNome: string;
    public readonly docDataEmissao: Date;
    public readonly docVlrLiquido: number;
    public readonly priCod?: number;

    public nomeProcesso?: string;

    constructor(
        props:{
            docCod: number;
            pesNome: string;
            docDataEmissao: number;
            docVlrLiquido: number;
            priCod?: number;
        }
    ) {
        this.docCod = props.docCod;
        this.pesNome = props.pesNome;
        this.docDataEmissao = new Date(props.docDataEmissao);
        this.docVlrLiquido = props.docVlrLiquido;
        this.priCod = props.priCod;
    }
}