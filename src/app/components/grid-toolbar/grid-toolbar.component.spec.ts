import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {GridToolbarComponent} from './grid-toolbar.component';
import {GridHeaderComponent} from '../grid-header/grid-header.component';

describe('GridToolbarComponent', () => {
  let component: GridToolbarComponent;
  let fixture: ComponentFixture<GridToolbarComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridToolbarComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(GridToolbarComponent);
    component = fixture.componentInstance;
  }));

  it('should create two parameters', () => {
    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('.parameter');
    expect(cellElements.length).toEqual(2);
  });

  it('should create a button', () => {
    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('button');
    expect(cellElements.length).toEqual(1);
  });
});
