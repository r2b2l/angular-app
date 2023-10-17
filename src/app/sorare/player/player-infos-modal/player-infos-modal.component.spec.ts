import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfosModalComponent } from './player-infos-modal.component';

describe('PlayerInfosModalComponent', () => {
  let component: PlayerInfosModalComponent;
  let fixture: ComponentFixture<PlayerInfosModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInfosModalComponent]
    });
    fixture = TestBed.createComponent(PlayerInfosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
