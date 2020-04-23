import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdListPage } from './prod-list.page';

describe('ProdListPage', () => {
  let component: ProdListPage;
  let fixture: ComponentFixture<ProdListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
