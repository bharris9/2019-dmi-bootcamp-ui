import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SoccerMatchComponent } from './soccer-match.component';

describe('WwcMatchComponent', () => {
  let component: SoccerMatchComponent;
  let fixture: ComponentFixture<SoccerMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoccerMatchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
