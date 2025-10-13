import { Component, signal } from '@angular/core';
import { AllToysModel } from '../../models/allToys.model';
import { AllToysService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected toysData= signal<AllToysModel[]>([])

  constructor() {
      AllToysService.getAllToys()
      .then(rsp => this.toysData.set(rsp.data))
      
  }
}
