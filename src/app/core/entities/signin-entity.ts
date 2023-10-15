export type SignDataEntity = {
    tipoPessoa: TipoPessoa,
    dadosBasicos: DadosBasicos
}

export type TipoPessoa = {
    tipo?: Tipo
}

export type Tipo = 'JURIDICA' | 'FISICA' | null

export type DadosBasicos = {
    CPF?: string | null,
    CNPJ?: string | null
}