import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyInformations } from './toy-informations';

describe('ToyInformations', () => {
  let component: ToyInformations;
  let fixture: ComponentFixture<ToyInformations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToyInformations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToyInformations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
