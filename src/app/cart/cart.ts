import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {}

  totalPrice(): number {
    return this.cartService.totalPrice();
  }


  
}
