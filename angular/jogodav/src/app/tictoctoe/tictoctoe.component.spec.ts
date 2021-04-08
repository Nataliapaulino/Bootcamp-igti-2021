import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictoctoeComponent } from './tictoctoe.component';

describe('TictoctoeComponent', () => {
  let component: TictoctoeComponent;
  let fixture: ComponentFixture<TictoctoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TictoctoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TictoctoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
