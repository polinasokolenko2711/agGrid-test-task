import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {GridHeaderComponent} from './grid-header.component';
import {AgGridModule} from 'ag-grid-angular';

describe('GridHeadComponent', () => {
  let component: GridHeaderComponent;
  let fixture: ComponentFixture<GridHeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          AgGridModule.withComponents([GridHeaderComponent])
      ],
      declarations: [
        GridHeaderComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(GridHeaderComponent);
    component = fixture.componentInstance;
  }));
  it('should create Header container', async( () => {
    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('.customHeaderLabel');
    expect(cellElements.length).toEqual(1);
  }));

});
