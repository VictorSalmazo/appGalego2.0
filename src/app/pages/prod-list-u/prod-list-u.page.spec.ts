import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdListUPage } from './prod-list-u.page';

describe('ProdListUPage', () => {
  let component: ProdListUPage;
  let fixture: ComponentFixture<ProdListUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdListUPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdListUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
