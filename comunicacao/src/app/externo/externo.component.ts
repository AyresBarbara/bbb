import { Component } from '@angular/core';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-externo',
  standalone: true,
  imports: [InternoComponent],// Importou o componente Interno dentro do Externo
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.scss'
})
export class ExternoComponent {
  versao!: string; // Declaração do minha variavel
  receberVersaoUrna(event: any){ // Método do meu KEYUP do externo.component.html
    this.versao = event.target.value;
    console.log(this.versao)
  }
}
