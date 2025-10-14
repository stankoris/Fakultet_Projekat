import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toy } from '../../models/toy.model';
import { ToyService } from '../../services/toy.service';

@Component({
  selector: 'app-alltoys',
  imports: [FormsModule],
  templateUrl: './alltoys.html',
  styleUrl: './alltoys.css'
})
export class Alltoys {
  protected toysData = signal<Toy[]>([])
   protected search: string = "";

  constructor() {
      ToyService.getAllToys()
      .then(rsp => this.toysData.set(rsp.data))
      
  }
}
