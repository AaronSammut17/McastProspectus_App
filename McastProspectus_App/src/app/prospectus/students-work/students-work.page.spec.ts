import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentsWorkPage } from './students-work.page';

describe('StudentsWorkPage', () => {
  let component: StudentsWorkPage;
  let fixture: ComponentFixture<StudentsWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
