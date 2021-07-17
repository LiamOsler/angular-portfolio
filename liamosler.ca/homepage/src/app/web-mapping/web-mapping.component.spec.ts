import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatButtonModule} from '@angular/material/button';

import { WebMappingComponent } from './web-mapping.component';

describe('WebMappingComponent', () => {
  let component: WebMappingComponent;
  let fixture: ComponentFixture<WebMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
