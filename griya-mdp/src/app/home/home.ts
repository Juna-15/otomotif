import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LokasiMobil} from '../lokasi-mobil/lokasi-mobil'; 
import { Car } from '../lokasi-mobil/car.model'; 
import { CarService } from '../services/car.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [LokasiMobil, CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
 
  housingList: Car[] = []; 
  filteredList: Car[] = [];
  selectedFilter: string = 'all';
  
  
  searchQuery: string = '';
  
  
  currentPage: number = 1;
  itemsPerPage: number = 8;
 
  isLoading: boolean = false;
  errorMessage: string = '';

 
  private fallbackData: Car[] = [ 
    {
      id: 1,
      title: 'Toyota Fortuner VRZ',
      location: 'Jakarta Selatan',
      price: 550000000,
      engineSize: 2755,
      horsepower: 204,
      mileage: 15000,
      image: 'https://paultan.org/image/2021/03/2021_Toyota_Fortuner_VRZ_Malaysia_Ext-4-1200x703.jpg',
      rating: 4.5,
      status: 'Available',
      type: 'suv',
      description: 'SUV Diesel premium yang tangguh dengan performa mesin 2.8L, cocok untuk segala medan.',
      postedDays: 2
    },
    {
      id: 2,
      title: 'Honda Civic Turbo RS',
      location: 'Tangerang',
      price: 490000000,
      engineSize: 1500,
      horsepower: 173,
      mileage: 8000,
      image: 'https://tse2.mm.bing.net/th/id/OIP.qKt9zjja4EQoexC3tM1i0gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: 4.8,
      status: 'Available',
      type: 'sedan',
      description: 'Sedan sporty dengan mesin turbo bertenaga, desain futuristik dan fitur keselamatan canggih.',
      postedDays: 5
    },
    {
      id: 3,
      title: 'Porsche 911 Carrera S',
      location: 'Bandung',
      price: 3800000000,
      engineSize: 3000,
      horsepower: 450,
      mileage: 500,
      image: 'https://s1.paultan.org/image/2015/09/2016-991-gen-porsche-911-carrera-carrera-s-facelift-12-e1441589472783.jpg',
      rating: 5.0,
      status: 'Pending',
      type: 'sport',
      description: 'Mobil sport legendaris, performa balap jalanan yang tak tertandingi.',
      postedDays: 1
    },
    {
      id: 4,
      title: 'Mitsubishi Xpander Ultimate',
      location: 'Surabaya',
      price: 280000000,
      engineSize: 1500,
      horsepower: 105,
      mileage: 32000,
      image: 'https://wallpapercave.com/wp/wp10007225.jpg',
      rating: 4.2,
      status: 'Available',
      type: 'suv',
      description: 'MPV Crossover andalan keluarga Indonesia, interior luas dan fitur hiburan modern.',
      postedDays: 7
    },
    {
      id: 5,
      title: 'Suzuki Swift GL',
      location: 'Depok',
      price: 195000000,
      engineSize: 1200,
      horsepower: 82,
      mileage: 45000,
      image: 'https://expatautocm.com/wp-content/uploads/2023/02/Suzuki-Swift-VHT599_02.jpg',
      rating: 4.1,
      status: 'Available',
      type: 'hatchback',
      description: 'Hatchback lincah yang irit bahan bakar, ideal untuk mobilitas perkotaan.',
      postedDays: 3
    },
    {
      id: 6,
      title: 'BMW 320i Sport',
      location: 'Jakarta Barat',
      price: 780000000,
      engineSize: 2000,
      horsepower: 184,
      mileage: 12000,
      image: 'https://images.carexpert.com.au/crop/1200/630/app/uploads/2023/02/BMW-320i-Sedan-M-Sport-HERO-16x9-1.jpg',
      rating: 4.9,
      status: 'Available',
      type: 'sedan',
      description: 'Sedan mewah asal Jerman dengan desain elegan dan handling presisi.',
      postedDays: 4
    },
        {
      id: 7,
      title: 'Mercedes Benz A200',
      location: 'Bandung',
      price: 480000000,
      engineSize: 1332,
      horsepower: 163,
      mileage: 21000,
      image: 'https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/02/1d3c9d0c910f73a05672edd39ff984db/17c833_009.jpg',
      rating: 4.7,
      status: 'Available',
      type: 'sedan',
      description: 'Sedan kompak premium dengan fitur MBUX canggih dan tampilan modern.',
      postedDays: 1
    },
    {
      id: 8,
      title: 'Jeep Wrangler Rubicon',
      location: 'Bali',
      price: 1850000000,
      engineSize: 2000,
      horsepower: 270,
      mileage: 9500,
      image: 'https://cdn.motor1.com/images/mgl/Oo0e1B/s1/2024-jeep-wrangler-rubicon-392-final-edition.jpg',
      rating: 4.9,
      status: 'Available',
      type: 'suv',
      description: 'SUV legendaris untuk petualangan off-road ekstrem, desain ikonik.',
      postedDays: 5
    }
  ];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.loadHousingData();
  }

  loadHousingData() {
    this.isLoading = true;
    this.errorMessage = '';

    this.carService.getAllCars().subscribe({ 
      next: (data) => {
        this.housingList = data;
        this.filteredList = data;
        this.isLoading = false;
        console.log('Data berhasil dimuat dari backend:', data);
      },
      error: (err) => {
        console.error('Error loading car data:', err);
        console.log('Menggunakan data fallback...');
        

        this.housingList = this.fallbackData;
        this.filteredList = this.fallbackData;
        this.isLoading = false;
        this.errorMessage = 'Menggunakan data demo (backend tidak tersedia)';
      }
    });
  }

  filterByType(type: string) {
    this.selectedFilter = type;
    this.currentPage = 1; 
    this.isLoading = true;
    this.errorMessage = '';
    
    if (type === 'all') {
      this.carService.getAllCars().subscribe({
        next: (data) => {
          this.housingList = data;
          this.filteredList = data;
          this.isLoading = false;
          if (this.searchQuery) {
            this.applySearch();
          }
        },
        error: (err) => {
          console.error('Error loading all car data:', err);
          this.filteredList = [...this.housingList];
          this.isLoading = false;
          if (this.searchQuery) {
            this.applySearch();
          }
        }
      });
    } else {
      this.carService.filterCarByType(type).subscribe({
        next: (data) => {
          this.filteredList = data;
          this.isLoading = false;
          if (this.searchQuery) {
            this.applySearch();
          }
        },
        error: (err) => {
          console.error('Error filtering car by type:', err);
          this.filteredList = this.housingList.filter(h => h.type === type);
          this.isLoading = false;
          if (this.searchQuery) {
            this.applySearch();
          }
        }
      });
    }
  }

  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }

  searchHousing() { 
    this.currentPage = 1;
    this.applySearch();
  }

  private applySearch() {
    const query = this.searchQuery.toLowerCase().trim();
    
    if (!query) {
      this.filterByType(this.selectedFilter);
      return;
    }

    let baseList = this.selectedFilter === 'all' 
      ? this.housingList 
      : this.housingList.filter(h => h.type === this.selectedFilter);

    this.filteredList = baseList.filter(house => 
      house.title.toLowerCase().includes(query) ||
      house.location.toLowerCase().includes(query) ||
      house.description?.toLowerCase().includes(query) ||
      house.status.toLowerCase().includes(query)
    );
  }

  clearSearch() {
    this.searchQuery = '';
    this.filterByType(this.selectedFilter);
  }

  get paginatedList(): Car[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredList.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredList.length / this.itemsPerPage);
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredList.length);
  }
}