import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaQRProfePage } from './pagina-qr-profe.page';

describe('PaginaQRProfePage', () => {
  let component: PaginaQRProfePage;
  let fixture: ComponentFixture<PaginaQRProfePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaQRProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
