import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdEditPage } from './prod-edit.page';

describe('ProdEditPage', () => {
  let component: ProdEditPage;
  let fixture: ComponentFixture<ProdEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
