import { Component } from '@angular/core';
import { TiposPessoaArray } from 'src/app/core/enums/tipo-pessoa.enum';

@Component({
  selector: 'app-signin-type',
  templateUrl: './signin-type.component.html',
  styleUrls: ['./signin-type.component.css'],
})
export class SigninTypeComponent {
  public tiposPessoaEnum = TiposPessoaArray;

  
}
