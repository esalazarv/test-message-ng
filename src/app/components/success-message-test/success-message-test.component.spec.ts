import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMessageTestComponent } from './success-message-test.component';

describe('SuccessMessageTestComponent', () => {
  let component: SuccessMessageTestComponent;
  let fixture: ComponentFixture<SuccessMessageTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessMessageTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMessageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
