import { TestBed } from '@angular/core/testing';
import { ThemeManagerService } from './theme-manager.service';

describe('ThemeManagerService', () => {
  let service: ThemeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default theme as light',()=>{
    expect(service.theme()).toBe('light')
  })

  it('should toggle theme from light to dark',()=>{
    service.toggleTheme();
    expect(service.theme()).toBe('dark')
  })

  it('should toggle theme from dark to light',()=>{
    service.toggleTheme();
    service.toggleTheme();
    expect(service.theme()).toBe('light')
  })



});
