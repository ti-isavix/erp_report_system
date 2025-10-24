import { ContaApagar } from "../../domain/entities/conta-a-pagar.entity";
import { Processo } from "../../domain/entities/processo.entity";

export type ContaApagarFilter = {
    dataInicial: Date;
    dataFinal: Date;
    filial: number;
};

export interface IErpApiclient{
    getContasApagar(filters: ContaApagarFilter): Promise<ContaApagar[]>;
    getProcessoByIds(ids: number[]): Promise<Processo[]>;

}