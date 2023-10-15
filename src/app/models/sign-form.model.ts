import { DadosBasicos, SignDataEntity, TipoPessoa } from "../core/entities/signin-entity";

export class SignData {
    tipoPessoa: TipoPessoa = {
        tipo: null
    };
    dadosBasicos: DadosBasicos = { 
        CPF: null,
        CNPJ: null
     }
     id = null 
    
    constructor(data: SignDataEntity) {
        if (data.tipoPessoa) this.tipoPessoa = data.tipoPessoa;
        if (data.dadosBasicos) this.dadosBasicos = data.dadosBasicos;
    }
}