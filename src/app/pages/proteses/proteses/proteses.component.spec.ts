import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtesesComponent } from './proteses.component';

describe('ProtesesComponent', () => {
  let component: ProtesesComponent;
  let fixture: ComponentFixture<ProtesesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtesesComponent]
    });
    fixture = TestBed.createComponent(ProtesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
