import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LokasiMobil } from './lokasi-mobil';

describe('LokasiMobil', () => {
  let component: LokasiMobil;
  let fixture: ComponentFixture<LokasiMobil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LokasiMobil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LokasiMobil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});