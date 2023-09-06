import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCheatSheetComponent } from './angular-cheat-sheet.component';

describe('AngularCheatSheetComponent', () => {
  let component: AngularCheatSheetComponent;
  let fixture: ComponentFixture<AngularCheatSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularCheatSheetComponent]
    });
    fixture = TestBed.createComponent(AngularCheatSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
