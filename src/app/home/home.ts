import { Component, signal } from '@angular/core';
import axios from 'axios';
import { AllToysModel } from '../../models/allToys.model';
import { AllToysService } from '../../services/main.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor],
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
