import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInputBoxComponent } from './log-input-box.component';

describe('LogInputBoxComponent', () => {
  let component: LogInputBoxComponent;
  let fixture: ComponentFixture<LogInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInputBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
