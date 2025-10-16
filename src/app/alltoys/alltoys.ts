import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toy } from '../../models/toy.model';
import { ToyService } from '../../services/toy.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alltoys',
  imports: [FormsModule],
  templateUrl: './alltoys.html',
  styleUrl: './alltoys.css'
})
export class Alltoys {
  protected toysData = signal<Toy[]>([])
  protected index = signal<number>(0);
  protected search: string = "";

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.loadToys();
  }

  loadToys() {
    ToyService.getAllToys()
      .then(rsp => this.toysData.set(rsp.data))
  }

 searchToys(search: string) {
    this.search = search;
  }

  public filterToys(): Toy[] {
    if (!this.search || this.search.trim() === '') {
      return this.toysData();
    }
    
    const searchLower = this.search.toLowerCase().trim();
    return this.toysData().filter(toy => 
      toy.name.toLowerCase().includes(searchLower)
    );
  }

  addToCart(toy: Toy) {
    // toy.status = "arrived";
    this.cartService.addToCart(toy);
    alert(`${toy.name} je dodata u korpu`);
  }

  showToyInformation() {
    const toy = this.toysData()[this.index()];
    this.router.navigate(['/toy', toy.toyId]);
  }
}
