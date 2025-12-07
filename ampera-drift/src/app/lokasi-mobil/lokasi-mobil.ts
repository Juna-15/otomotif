import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from './car.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lokasi-mobil',
  imports: [CommonModule, RouterLink],
  templateUrl: './lokasi-mobil.html',
  styleUrl: './lokasi-mobil.css', 
})
export class LokasiMobil {
  @Input() housing!: Car;

  getStars(): number[] {
    const fullStars = Math.floor(this.housing.rating);
    return Array(fullStars).fill(0);
  }

  hasHalfStar(): boolean {
    return this.housing.rating % 1 >= 0.5;
  }

  getEmptyStars(): number[] {
    const fullStars = Math.floor(this.housing.rating);
    const hasHalf = this.hasHalfStar() ? 1 : 0;
    const emptyStars = 5 - fullStars - hasHalf;
    return Array(emptyStars).fill(0);
  }
  

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  }
}