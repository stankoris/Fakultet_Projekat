import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToyService } from '../../services/toy.service';
import { Toy } from '../../models/toy.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-toy-informations',
  imports: [],
  templateUrl: './toy-informations.html',
  styleUrl: './toy-informations.css'
})
export class ToyInformations implements OnInit {

  toy?: Toy;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const response = await ToyService.getAllToys();
    const toys = response.data;
    this.toy = toys.find(t => t.toyId === id);
  }

  addToCart() {
    if (this.toy) {
      this.cartService.addToCart(this.toy);
      alert(`${this.toy.name} je dodata u korpu`);
    }
  }
}
