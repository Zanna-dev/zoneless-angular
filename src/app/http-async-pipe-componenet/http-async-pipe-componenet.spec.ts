import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAsyncPipeComponenet } from './http-async-pipe-componenet';

describe('HttpAsyncPipeComponenet', () => {
  let component: HttpAsyncPipeComponenet;
  let fixture: ComponentFixture<HttpAsyncPipeComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpAsyncPipeComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpAsyncPipeComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
