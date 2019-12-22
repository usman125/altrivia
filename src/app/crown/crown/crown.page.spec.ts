import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrownPage } from './crown.page';

describe('CrownPage', () => {
  let component: CrownPage;
  let fixture: ComponentFixture<CrownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
