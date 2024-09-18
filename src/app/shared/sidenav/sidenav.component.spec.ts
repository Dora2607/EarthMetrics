import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { SharedModule } from '../shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ThemeManagerService } from '../../services/theme-manager.service';
import { signal } from '@angular/core';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let themeManager: jasmine.SpyObj<ThemeManagerService>;

  beforeEach(async () => {
    const spyTheme = jasmine.createSpyObj('ThemeManagerService', ['toggleTheme'],  { theme: signal('light') })
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ id: '1' })
            }
          }
        },
        { provide: ThemeManagerService, useValue: spyTheme },
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    themeManager = TestBed.inject(ThemeManagerService) as jasmine.SpyObj<ThemeManagerService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle theme', () => {
    component.toggleTheme();
    expect(themeManager.toggleTheme).toHaveBeenCalled();
  });


});
