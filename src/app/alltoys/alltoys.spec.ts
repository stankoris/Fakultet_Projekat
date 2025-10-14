import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alltoys } from './alltoys';

describe('Alltoys', () => {
  let component: Alltoys;
  let fixture: ComponentFixture<Alltoys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alltoys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alltoys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
