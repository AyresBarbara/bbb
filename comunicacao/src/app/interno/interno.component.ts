import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interno',
  standalone: true,
  imports: [],
  templateUrl: './interno.component.html', // É o que vai mostrar pro meu usuário
  styleUrl: './interno.component.scss'
})
export class InternoComponent {
  @Input() versaoUrna!: string ; // Quer dizer que o Input vai receber uma string ou algo indefiinido
  contra: number = 0;
  aFavor: number = 0;

  votar(voto:boolean){ //Se o voto for verdadeiro, aFavor++, se não contra++
    if(voto){
      this.aFavor++
    }
    else{
      this.contra++
    }
  }

}
