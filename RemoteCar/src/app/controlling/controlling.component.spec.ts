import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControllingComponent } from './controlling.component';

describe('ControllingComponent', () => {
  let component: ControllingComponent;
  let fixture: ComponentFixture<ControllingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
