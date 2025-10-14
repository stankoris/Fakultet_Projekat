import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Toy } from '../models/toy.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<Toy[]>([]);

  get items() {
    return this.cartItems.asReadonly();
  }

  addToCart(toy: Toy) {
    const current = this.cartItems();
    if (!current.find(t => t.toyId === toy.toyId)) {
      this.cartItems.set([...current, toy]);
    }
  }

  removeFromCart(toyId: number) {
    this.cartItems.set(this.cartItems().filter(t => t.toyId !== toyId));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
