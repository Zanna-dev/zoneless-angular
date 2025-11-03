import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualChangeComponent } from './manual-change-component';

describe('ManualChangeComponent', () => {
  let component: ManualChangeComponent;
  let fixture: ComponentFixture<ManualChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
