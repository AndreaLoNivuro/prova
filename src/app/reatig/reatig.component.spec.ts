import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReatigComponent } from './reatig.component';

describe('ReatigComponent', () => {
  let component: ReatigComponent;
  let fixture: ComponentFixture<ReatigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReatigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReatigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
