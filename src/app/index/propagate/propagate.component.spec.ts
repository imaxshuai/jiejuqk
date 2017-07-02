import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropagateComponent } from './propagate.component';

describe('PropagateComponent', () => {
  let component: PropagateComponent;
  let fixture: ComponentFixture<PropagateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropagateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropagateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
