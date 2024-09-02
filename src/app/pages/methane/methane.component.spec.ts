import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethaneComponent } from './methane.component';

describe('MethaneComponent', () => {
  let component: MethaneComponent;
  let fixture: ComponentFixture<MethaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
