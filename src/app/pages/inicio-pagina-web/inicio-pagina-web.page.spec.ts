import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPaginaWebPage } from './inicio-pagina-web.page';

describe('InicioPaginaWebPage', () => {
  let component: InicioPaginaWebPage;
  let fixture: ComponentFixture<InicioPaginaWebPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioPaginaWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
