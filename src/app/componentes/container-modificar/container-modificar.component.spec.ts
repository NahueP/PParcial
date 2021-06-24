import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerModificarComponent } from './container-modificar.component';

describe('ContainerModificarComponent', () => {
  let component: ContainerModificarComponent;
  let fixture: ComponentFixture<ContainerModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
