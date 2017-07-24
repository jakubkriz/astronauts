import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautNewComponent } from './astronaut-new.component';

describe('AstronautNewComponent', () => {
  let component: AstronautNewComponent;
  let fixture: ComponentFixture<AstronautNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronautNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronautNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
