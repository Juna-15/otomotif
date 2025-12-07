import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileHeaderComponent } from './components/profile-header/profile-header';
import { StatsCardComponent } from './components/stats-card/stats-card';
import { AboutCardComponent } from './components/about-card/about-card';
import { SocialCardComponent } from './components/social-card/social-card';
import { PropertyItemComponent } from './components/property-item/property-item';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item';
import { HistoryItemComponent } from './components/history-item/history-item';

import { UserProfile, StatsSummary, PropertyItem, FavoriteItem, HistoryItem, SocialLinks } from './profile.models'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    StatsCardComponent,
    AboutCardComponent,
    SocialCardComponent,
    PropertyItemComponent,
    FavoriteItemComponent,
    HistoryItemComponent
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user: UserProfile = {
    name: 'Satria Mahatir',
    email: 'Satria.racer@autohub.com',
    phone: '+62 812-3456-7890',
    location: 'Talang Kelapo, Indonesia',
    avatar: 'https://ui-avatars.com/api/?name=Satria+Mahatir&size=150&background=FFC107&color=000&bold=true',
    isPremium: true,
    isVerified: true,
    memberSince: 'Mar 2024',
    bio: 'Seorang penggemar otomotif dan kolektor mobil sport klasik. Aktif mencari unit premium untuk koleksi pribadi dan track day.',
    job: 'Otomotif Engineer',
    birthdate: '10 April 1995',
    status: 'Single'
  };

  stats: StatsSummary = {
    properties: 2,
    favorites: 15,
    rating: 5.0,
    memberSince: 'Mar 2024'
  };

  socialLinks: SocialLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#'
  };

  properties: PropertyItem[] = [
    {
      id: 1,
      title: 'Toyota Fortuner VRZ',
      location: 'Jakarta Selatan',
      price: 550000000,
      engineSize: 2755, 
      horsepower: 204,
      mileage: 15000,
      image: 'https://paultan.org/image/2021/03/2021_Toyota_Fortuner_VRZ_Malaysia_Ext-4-1200x703.jpg',
      status: 'Pending'
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
      status: 'Pending',
    }
  ];

  favorites: FavoriteItem[] = [
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
    }
  ];

  history: HistoryItem[] = [
    {
      icon: 'bi-check-circle-fill',
      iconColor: 'success',
      title: 'Penjualan Berhasil',
      description: 'Unit Honda Civic Type R Terjual',
      time: '2 hari yang lalu',
      badge: 'Rp 1.1 M',
      badgeColor: 'success'
    },
    {
      icon: 'bi-car-front-fill',
      iconColor: 'warning',
      title: 'Unit Diiklankan',
      description: 'BMW M3 Competition terdaftar',
      time: '5 hari yang lalu',
      badge: 'Iklan Baru',
      badgeColor: 'warning'
    },
    {
      icon: 'bi-pencil-fill',
      iconColor: 'info',
      title: 'Profile Diperbarui',
      description: 'Informasi hobi dan koleksi',
      time: '1 minggu yang lalu',
      badge: 'Update',
      badgeColor: 'info'
    },
    {
      icon: 'bi-star-fill',
      iconColor: 'primary',
      title: 'Review Diterima',
      description: 'Penilaian 5.0 untuk unit Toyota Supra',
      time: '2 minggu yang lalu',
      badge: 'Review',
      badgeColor: 'primary'
    }
  ];

  onEditProfile() {
    console.log('Edit profile clicked');
  }

  onSettings() {
    console.log('Settings clicked');
  }

  onEditProperty(propertyId: number) {
    console.log('Edit property (Car):', propertyId);
  }

  onDeleteProperty(propertyId: number) {
    if (confirm('Yakin ingin menghapus unit mobil ini?')) {
      this.properties = this.properties.filter(p => p.id !== propertyId);
      console.log('Car deleted:', propertyId);
    }
  }
}