import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { TiposPessoaArray } from 'src/app/core/enums/tipo-pessoa.enum';

@Component({
  selector: 'app-signin-type',
  templateUrl: './signin-type.component.html',
  styleUrls: ['./signin-type.component.css'],
})
export class SigninTypeComponent implements OnInit{
  @Input() formGroupName!: string;
  form!: FormGroup;
  tiposPessoaEnum = TiposPessoaArray;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
