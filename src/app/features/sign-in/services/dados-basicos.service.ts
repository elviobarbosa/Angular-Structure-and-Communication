import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Tipo, TipoPessoa } from 'src/app/core/entities/signin-entity';

@Injectable({
  providedIn: 'root'
})
export class DadosBasicosService {

  constructor() { }

  enableFields(form: FormGroup, tipo: Tipo) {
    const tipoPessoaEnabled = (tipo === 'FISICA') ? form.get('CPF') : form.get('CNPJ');
    const tipoPessoaDisabled = (tipo === 'FISICA') ? form.get('CNPJ') : form.get('CPF');
   
    tipoPessoaDisabled?.clearValidators();
    tipoPessoaDisabled?.updateValueAndValidity();

    tipoPessoaEnabled?.setValidators([Validators.required]);
    tipoPessoaEnabled?.updateValueAndValidity();
  }
}
