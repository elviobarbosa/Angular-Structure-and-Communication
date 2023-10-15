import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { SigninFormBuilderService } from '../services/signin-form-builder.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DadosBasicosService } from '../services/dados-basicos.service';
import { SignData } from 'src/app/models/sign-form.model';
import { Tipo, TipoPessoa } from 'src/app/core/entities/signin-entity';
@Component({
  selector: 'app-signin-index',
  templateUrl: './signin-index.component.html',
  styleUrls: ['./signin-index.component.css']
})
export class SigninIndexComponent implements OnInit, OnDestroy {
  form: FormGroup = this._servSignInFormBuilder.form;
  tipoPessoa = this.form.get('tipoPessoa.tipo') as FormControl;
  dadosBasicos = this.form.get('dadosBasicos') as FormGroup;
  formValue = new SignData(this.form.value)

  @Output() propsOutput!: SignData;
  
  private _tipoPessoaChanges: Subscription = new Subscription();

  constructor(
    private readonly _servSignInFormBuilder: SigninFormBuilderService,
    private readonly _servDadosBasicos: DadosBasicosService
  ) {}

  public dadosBasicosController(tipo: Tipo) {
    this._servDadosBasicos.enableFields(this.dadosBasicos, tipo);
    this.formValue.tipoPessoa.tipo = tipo

    console.log(this.formValue);
    
    this.propsOutput = this.form.value;
  }

  ngOnInit(): void {
    this._tipoPessoaChanges = this.tipoPessoa.valueChanges.subscribe(tipo => {
      this.dadosBasicosController(tipo)
    })
  }

  ngOnDestroy(): void {
    this._tipoPessoaChanges.unsubscribe();
  }
}
