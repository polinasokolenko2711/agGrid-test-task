import { Component, OnInit } from '@angular/core';
import { IToolPanelParams, ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid-toolbar',
  templateUrl: './grid-toolbar.component.html',
  styleUrls: ['./grid-toolbar.component.scss']
})
export class GridToolbarComponent implements OnInit {
  private params: IToolPanelParams;
  private columnsDef: ColDef[] = [];
  private isSelectedMode: boolean;

  totalAmount: number = 0;
  selectedAmount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Getting the grid params and add event handlers
   * @param params
   */
  agInit(params: IToolPanelParams): void {
      this.params = params;
      this.params.api.addEventListener('modelUpdated', this.updateModel.bind(this));
      this.params.api.addEventListener('rowSelected', this.updateSelectedRowsCount.bind(this));
  }

  /**
   * Toggle selection mode (with/without checkbox)
   * @param params
   */
  toggleMode(): void {
    const checkboxColumnDef = { headerCheckboxSelection: true, checkboxSelection: true, width: 45, pinned: true };
    if (this.params.api.getColumnDef('thumbnails')) {
      this.columnsDef = [
        this.params.api.getColumnDef('thumbnails'),
        this.params.api.getColumnDef('publishedAt'),
        this.params.api.getColumnDef('title'),
        this.params.api.getColumnDef('description')
      ];
    }
    this.isSelectedMode = !this.isSelectedMode;
    if (this.isSelectedMode) {
    this.columnsDef.unshift(checkboxColumnDef);
    } else {
      this.columnsDef.splice(0, 1);
    }
    this.params.api.setColumnDefs(this.columnsDef);
  }

  /**
   * event handler modelUpdated, recalculating total amount of rows
   */
  updateModel(): void {
    this.totalAmount = this.params.api.getDisplayedRowCount();
  }

  /**
   * event handler rowSelected, recalculating amount of selected rows
   */
  updateSelectedRowsCount(): void {
    this.selectedAmount = this.params.api.getSelectedNodes().length;
  }
}
