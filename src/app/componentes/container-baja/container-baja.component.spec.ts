import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBajaComponent } from './container-baja.component';

describe('ContainerBajaComponent', () => {
  let component: ContainerBajaComponent;
  let fixture: ComponentFixture<ContainerBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
