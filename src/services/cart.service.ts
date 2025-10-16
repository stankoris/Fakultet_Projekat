import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Toy } from '../models/toy.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private toysInCart = signal<Toy[]>([]);

  get toys() {
    return this.toysInCart.asReadonly();
  }

  addToCart(toy: Toy) {
    const toysList = this.toysInCart();
    this.toysInCart.set([...toysList, toy]);
  }

  removeFromCart(toyId: number) {
    this.toysInCart.set(this.toysInCart().filter(t => t.toyId !== toyId));
  }

  emptyCart() {
    this.toysInCart.set([]);
  }

  totalPrice() {
    return this.toysInCart().reduce((total, toy) => total + toy.price, 0);
  }
}
