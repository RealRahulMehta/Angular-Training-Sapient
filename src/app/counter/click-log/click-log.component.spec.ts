import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickLogComponent } from './click-log.component';

describe('ClickLogComponent', () => {
  let component: ClickLogComponent;
  let fixture: ComponentFixture<ClickLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
