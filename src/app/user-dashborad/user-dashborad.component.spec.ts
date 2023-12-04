import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboradComponent } from './user-dashborad.component';

describe('UserDashboradComponent', () => {
  let component: UserDashboradComponent;
  let fixture: ComponentFixture<UserDashboradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDashboradComponent]
    });
    fixture = TestBed.createComponent(UserDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
