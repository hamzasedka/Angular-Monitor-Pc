import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamChartComponent } from './ram-chart.component';

describe('RamChartComponent', () => {
  let component: RamChartComponent;
  let fixture: ComponentFixture<RamChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
