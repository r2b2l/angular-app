import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClubComponent } from './my-club.component';

describe('MyClubComponent', () => {
  let component: MyClubComponent;
  let fixture: ComponentFixture<MyClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyClubComponent]
    });
    fixture = TestBed.createComponent(MyClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
