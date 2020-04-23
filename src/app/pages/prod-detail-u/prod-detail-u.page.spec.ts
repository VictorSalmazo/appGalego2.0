import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdDetailUPage } from './prod-detail-u.page';

describe('ProdDetailUPage', () => {
  let component: ProdDetailUPage;
  let fixture: ComponentFixture<ProdDetailUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDetailUPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdDetailUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
