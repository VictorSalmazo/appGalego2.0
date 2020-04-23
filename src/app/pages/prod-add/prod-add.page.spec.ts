import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdAddPage } from './prod-add.page';

describe('ProdAddPage', () => {
  let component: ProdAddPage;
  let fixture: ComponentFixture<ProdAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
