import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import {GridHeaderComponent} from './components/grid-header/grid-header.component';
import {GridToolbarComponent} from './components/grid-toolbar/grid-toolbar.component';

@Component({selector: 'app-data-grid', template: ''})
class DataGridStubComponent {}

describe('AppComponent', () => {


  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AgGridModule.withComponents([DataGridComponent, GridHeaderComponent])
      ],
      declarations: [
          DataGridComponent,
          GridHeaderComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    fixture.detectChanges()
    expect(component).toBeTruthy();
  }));

  it('grid API is not available until  `detectChanges`', async(() => {
    expect(component.gridOptions).toBeTruthy();
  }));

  it('grid API is available after `detectChanges`', async(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
