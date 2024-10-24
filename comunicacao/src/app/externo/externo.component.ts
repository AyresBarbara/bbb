import { Component } from '@angular/core';
import { InternoComponent } from '../interno/interno.component';

@Component({
  selector: 'app-externo',
  standalone: true,
  imports: [InternoComponent],
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.scss'
})
export class ExternoComponent {

}
