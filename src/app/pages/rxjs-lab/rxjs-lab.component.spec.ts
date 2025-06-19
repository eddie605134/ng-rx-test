import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLabComponent } from './rxjs-lab.component';

describe('RxjsLabComponent', () => {
  let component: RxjsLabComponent;
  let fixture: ComponentFixture<RxjsLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
