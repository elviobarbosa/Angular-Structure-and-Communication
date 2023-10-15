import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { SignData } from 'src/app/models/sign-form.model';

@Component({
  selector: 'app-singin-personal',
  templateUrl: './singin-personal.component.html',
  styleUrls: ['./singin-personal.component.css']
})
export class SinginPersonalComponent implements OnInit {
  form!:FormGroup;
  
  @Input() propsInput!: SignData;
  @Input() formGroupName!: string;

  get pessoaFisica(): boolean {
    return (this.propsInput && this.propsInput.tipoPessoa.tipo !== 'FISICA' )
  }

  get pessoaJuridica(): boolean {
    return (this.propsInput && this.propsInput.tipoPessoa.tipo !== 'JURIDICA' )
  }

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

}
