import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N2oComponent } from './n2o.component';

describe('N2oComponent', () => {
  let component: N2oComponent;
  let fixture: ComponentFixture<N2oComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [N2oComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(N2oComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
