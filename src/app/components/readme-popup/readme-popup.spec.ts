import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadmePopup } from './readme-popup';

describe('ReadmePopup', () => {
  let component: ReadmePopup;
  let fixture: ComponentFixture<ReadmePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadmePopup],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadmePopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
