import { Component, signal } from '@angular/core';
import { ToyService } from '../../services/toy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected toysData = signal<{ toyId: number; imageUrl: string }[]>([]);
  protected index = signal<number>(0);
  protected error = signal<any>(null)

  constructor(private router: Router) {
    ToyService.getToysPicturesIDs()
        .then(rsp => this.toysData.set(rsp))
        .catch(e => this.error.set(e));
    }

    nextImage() {
      const data = this.toysData();
      const next = (this.index() + 1) % data.length;
      this.index.set(next);
    }

    previousImage() {
      const data = this.toysData();
      const previous = (this.index() - 1 + data.length) % data.length;
      this.index.set(previous);
    } 

    showToyInformation() {
    const toy = this.toysData()[this.index()];
    this.router.navigate(['/toy', toy.toyId]);
  }

  ngOnInit() {
    setInterval(() => this.nextImage(), 12000);
  }
}
