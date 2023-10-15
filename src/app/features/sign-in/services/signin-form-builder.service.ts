import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninFormBuilderService {

  private _destroyed$ = new ReplaySubject();

  private readonly _form = new FormGroup({
    tipoPessoa: new FormGroup({
      tipo: new FormControl(<string | null>null, [Validators.required]),
    }),
    dadosBasicos: new FormGroup({
      CPF: new FormControl(<string | null>null, [Validators.required]),
      CNPJ: new FormControl(<string | null>null, [Validators.required]),
    }),
    id: new FormControl(<number | null>null),
    // cep: new FormControl(<string | null>null, [Validators.required]),
    // logradouro: new FormControl(<string | null>null, [Validators.required]),
    // cidade: new FormControl(<string | null>null, [Validators.required]),
    // uf: new FormControl(<string | null>null, [Validators.required]),
  });
  // private _form:FormGroup = this._fb.group({
  //   tipoPessoa: this._fb.group({
  //     tipo: ['', Validators.required],
  //   }),
  //   dadosBasicos: this._fb.group({
  //     cpf: ['', Validators.required],
  //     tipoPescnpjsoa: ['', Validators.required]
  //   })
  // })

  get form():FormGroup {
    return this._form;
  }

  constructor(
    private _fb: FormBuilder
  ) {}

  public resetForm() {
    this.form.reset();
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();;
  }
}
