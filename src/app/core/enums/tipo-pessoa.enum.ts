export enum TiposPessoaEnum {
  FISICA = 'Física',
  JURIDICA = 'Jurídica',
}

export const TiposPessoaArray = Object.keys(TiposPessoaEnum).map((key) => ({
  value: key as keyof typeof TiposPessoaEnum,
  label: TiposPessoaEnum[key as keyof typeof TiposPessoaEnum],
}));
