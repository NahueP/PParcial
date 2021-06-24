import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAltaComponent } from './container-alta.component';

describe('ContainerAltaComponent', () => {
  let component: ContainerAltaComponent;
  let fixture: ComponentFixture<ContainerAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
