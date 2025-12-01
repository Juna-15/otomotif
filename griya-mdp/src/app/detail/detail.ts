import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Car } from '../lokasi-mobil/car.model'; 
import { CAR_DATA } from '../data/car-data';
import { CarService } from '../services/car.service'; 

@Component({
  selector: 'app-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail implements OnInit{
  housing:Car | null=null; 
  isLoading:boolean=true;
  errorMessage:string='';
  propertyId: number=0;

  private fallbackData:Car[] = CAR_DATA;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private carService: CarService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.propertyId = +params['id']; 
      this.loadPropertyDetail();
    });
  }
  
  loadPropertyDetail(): void {
    this.isLoading = true;
    this.errorMessage = '';


    this.carService.getCarById(this.propertyId).subscribe({
      next: (foundCar) => {
        this.housing = foundCar;
        this.isLoading = false;
        console.log('Detail mobil berhasil dimuat dari API:', foundCar);
      },
      error: (err) => {

        console.error('API call failed. Loading from local fallback:', err);
        this.loadFromFallback();
      }
    });
  }

  loadFromFallback(): void {
      const foundCar = this.fallbackData.find(c => c.id === this.propertyId);
      
      if (foundCar) {
          this.housing = foundCar;
          this.isLoading = false;
          this.errorMessage = 'Menggunakan data demo (Backend tidak tersedia)'; 
          console.log('Detail mobil dimuat dari data fallback.');
      } else {
          this.errorMessage = 'Mobil tidak ditemukan.'; 
          this.isLoading = false;
          console.error('Mobil ID', this.propertyId, 'tidak ada di data fallback.');
      }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'available':
        return 'bg-success';
      case 'pending':
        return 'bg-warning text-dark';
      case 'sold':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  getTypeClass(type: string): string {
    switch(type?.toLowerCase()) {
      case 'sedan':
        return 'bg-primary';
      case 'suv':
        return 'bg-info';
      case 'hatchback':
        return 'bg-warning text-dark';
      case 'sport':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
}