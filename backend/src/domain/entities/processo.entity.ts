export class Processo {
    public readonly priCod: number;
    public readonly priEspReferencia: string;
    constructor(props: {
        priCod: number;
        priEspReferencia: string;
    }) {
        this.priCod = props.priCod;
        this.priEspReferencia = props.priEspReferencia;
    }
}