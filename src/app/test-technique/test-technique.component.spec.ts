import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTechniqueComponent } from './test-technique.component';

describe('TestTechniqueComponent', () => {
  let component: TestTechniqueComponent;
  let fixture: ComponentFixture<TestTechniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTechniqueComponent]
    });
    fixture = TestBed.createComponent(TestTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
