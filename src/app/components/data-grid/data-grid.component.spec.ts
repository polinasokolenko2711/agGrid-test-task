import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DataGridComponent} from './data-grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {GridToolbarComponent} from '../grid-toolbar/grid-toolbar.component';
import {GridHeaderComponent} from '../grid-header/grid-header.component';
import {GridService} from '../../services/grid.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('DataGridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AgGridModule.withComponents([GridToolbarComponent, GridHeaderComponent])
      ],
      declarations: [DataGridComponent, GridToolbarComponent, GridHeaderComponent]
    }).compileComponents()
    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create ag-grid-angular ', () =>  {
    const elm = fixture.nativeElement;
    const grid = elm.querySelector('ag-grid-angular');
    const firstRowCells = grid.querySelectorAll(
        'div[row-id="0"] div.ag-cell-value'
    );
    expect(grid).toBeTruthy();
  });

  it('should have 4 rows with titles', () => {
    const elm = fixture.nativeElement;
    const grid = elm.querySelectorAll('.customHeaderLabel');
    expect(grid.length).toEqual(4)
    expect(grid[0].textContent).toEqual('')
    expect(grid[1].textContent).toEqual('Published on')
    expect(grid[2].textContent).toEqual('Video Title')
    expect(grid[3].textContent).toEqual('Description')
  });

});
