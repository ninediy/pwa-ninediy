import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeagueDetailComponent } from './dialog-league-detail.component';

describe('DialogLeagueDetailComponent', () => {
  let component: DialogLeagueDetailComponent;
  let fixture: ComponentFixture<DialogLeagueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLeagueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLeagueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
