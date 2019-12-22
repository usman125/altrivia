import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectModePage } from './select-mode.page';

describe('SelectModePage', () => {
  let component: SelectModePage;
  let fixture: ComponentFixture<SelectModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
