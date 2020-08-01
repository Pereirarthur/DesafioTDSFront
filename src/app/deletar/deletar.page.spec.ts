import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletarPage } from './deletar.page';

describe('DeletarPage', () => {
  let component: DeletarPage;
  let fixture: ComponentFixture<DeletarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
