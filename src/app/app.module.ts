import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'ag-grid-enterprise';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { GridToolbarComponent } from './components/grid-toolbar/grid-toolbar.component';
import { GridHeaderComponent } from './components/grid-header/grid-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    GridToolbarComponent,
    GridHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([GridToolbarComponent, GridHeaderComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
